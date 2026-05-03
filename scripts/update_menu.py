import sys
import os
import fitz  # PyMuPDF

print("Starting Menu PDF Conversion...")

# Define paths relative to the script location
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
ASSETS_DIR = os.path.join(PROJECT_DIR, "assets")
PDF_PATH = os.path.join(ASSETS_DIR, "menu.pdf")

if not os.path.exists(PDF_PATH):
    print(f"ERROR: Could not find menu.pdf at {PDF_PATH}")
    print("Please make sure you have placed the new 'menu.pdf' in the 'assets' folder.")
    sys.exit(1)

import re

try:
    print(f"Opening {PDF_PATH}...")
    pdf_document = fitz.open(PDF_PATH)
    num_pages = len(pdf_document)
    
    # High-resolution conversion
    zoom_x = 2.0  # horizontal zoom
    zoom_y = 2.0  # vertical zoom
    mat = fitz.Matrix(zoom_x, zoom_y)
    
    html_links = []
    
    for page_num in range(num_pages):
        page = pdf_document.load_page(page_num)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        
        page_index = page_num + 1
        output_filename = f"menu_page_{page_index}.png"
        output_path = os.path.join(ASSETS_DIR, output_filename)
        
        pix.save(output_path)
        print(f"Successfully generated: {output_filename}")
        
        # Build the HTML snippet for this page
        link = f'''                    <a href="assets/{output_filename}" target="_blank" class="menu-image-link">
                        <img src="assets/{output_filename}" alt="Menu Page {page_index}" class="menu-page-img" loading="lazy">
                    </a>'''
        html_links.append(link)
        
    # --- UPDATE HTML FILES ---
    replacement_html = "\n".join(html_links)
    
    def update_html_file(filename):
        filepath = os.path.join(PROJECT_DIR, filename)
        if not os.path.exists(filepath):
            return
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace everything between the opening container div and its closing div
        pattern = re.compile(r'(<div class="menu-images-container">).*?(                </div>\s*<div class="menu-actions">)', re.DOTALL)
        
        # We use a lambda to avoid backreference parsing errors with \1 if there are numbers in the replacement html
        new_content = pattern.sub(lambda m: f"{m.group(1)}\n{replacement_html}\n{m.group(2)}", content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully updated HTML in: {filename}")

    update_html_file("index.html")
    update_html_file("index_bundled.html")
        
    print("--------------------------------------------------")
    print(f"SUCCESS: Menu updated with {num_pages} pages!")
    print("You can now view your website to see the new menu.")
    print("--------------------------------------------------")
    
except Exception as e:
    print(f"An error occurred during conversion: {e}")
    sys.exit(1)

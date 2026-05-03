#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")/.."

echo "------------------------------------------------"
echo "  Stick With It - Menu Update Tool              "
echo "------------------------------------------------"

# Ensure virtual environment exists
if [ ! -d "scripts/.venv" ]; then
    echo "First time setup: Creating Python environment..."
    python3 -m venv scripts/.venv
fi

# Activate virtual environment
source scripts/.venv/bin/activate

# Install required packages (won't reinstall if already there)
pip install --quiet PyMuPDF

# Run the python script
python3 scripts/update_menu.py

echo ""
echo "Press any key to close this window..."
read -n 1 -s

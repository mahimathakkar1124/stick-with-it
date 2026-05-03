export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  zomatoUrl, instagramHandle, instagramUrl, address, mapsUrl, openingHours, tickerText
}`

export const GALLERY_ITEMS_QUERY = `*[_type == "galleryItem"] | order(order asc){
  _id, "imageUrl": image.asset->url, caption
}`

export const WAFFLE_OPTIONS_QUERY = `*[_type == "waffleOption"] | order(order asc){
  _id, step, name, price, "imageUrl": image.asset->url
}`

export const STORY_QUERY = `*[_type == "storySection"][0]{
  heading, body1, body2,
  "image1Url": image1.asset->url,
  "image2Url": image2.asset->url,
  "image3Url": image3.asset->url
}`

export const MENU_PDF_QUERY = `*[_type == "menuPdf"][0]{
  "fileUrl": file.asset->url
}`

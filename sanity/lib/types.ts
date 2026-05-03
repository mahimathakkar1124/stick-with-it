export type SiteSettings = {
  zomatoUrl: string
  instagramHandle: string
  instagramUrl: string
  address: string
  mapsUrl: string
  openingHours: string
  tickerText: string
  phone?: string
}

export type GalleryItem = {
  _id: string
  imageUrl: string
  caption?: string
}

export type WaffleOption = {
  _id: string
  step: 'shape' | 'base' | 'sauce' | 'topping' | 'extra'
  name: string
  price?: number
  imageUrl?: string
}

export type StoryData = {
  heading?: string
  body1?: string
  body2?: string
  image1Url?: string
  image2Url?: string
  image3Url?: string
}

export type MenuPdf = {
  fileUrl?: string
}

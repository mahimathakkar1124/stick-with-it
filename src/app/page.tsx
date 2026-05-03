import { client } from '../../sanity/lib/client'
import {
  SITE_SETTINGS_QUERY,
  GALLERY_ITEMS_QUERY,
  WAFFLE_OPTIONS_QUERY,
  STORY_QUERY,
  MENU_PDF_QUERY,
} from '../../sanity/lib/queries'
import { SiteSettings, GalleryItem, WaffleOption, StoryData, MenuPdf } from '../../sanity/lib/types'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Ticker from '@/components/Ticker'
import StorySection from '@/components/StorySection'
import WaffleBuilder from '@/components/WaffleBuilder'
import PlattersSection from '@/components/PlattersSection'
import GallerySection from '@/components/GallerySection'
import PancakesSection from '@/components/PancakesSection'
import SidesSection from '@/components/SidesSection'
import InstagramSection from '@/components/InstagramSection'
import Footer from '@/components/Footer'

export const revalidate = 60 // revalidate every 60 seconds

const safeFetch = <T,>(query: string): Promise<T | null> =>
  client.fetch<T>(query).catch(() => null)

export default async function Home() {
  const [settings, galleryItems, waffleOptions, story, menuPdf] = await Promise.all([
    safeFetch<SiteSettings>(SITE_SETTINGS_QUERY),
    safeFetch<GalleryItem[]>(GALLERY_ITEMS_QUERY),
    safeFetch<WaffleOption[]>(WAFFLE_OPTIONS_QUERY),
    safeFetch<StoryData>(STORY_QUERY),
    safeFetch<MenuPdf>(MENU_PDF_QUERY),
  ])

  return (
    <>
      <Navbar zomatoUrl={settings?.zomatoUrl} />
      <HeroSection />
      <Ticker tickerText={settings?.tickerText} />
      <StorySection story={story} />
      <WaffleBuilder waffleOptions={waffleOptions} zomatoUrl={settings?.zomatoUrl} />
      <PlattersSection />
      <GallerySection items={galleryItems} />
      <PancakesSection />
      <SidesSection />
      <InstagramSection instagramUrl={settings?.instagramUrl} instagramHandle={settings?.instagramHandle} />
      <Footer settings={settings} menuPdfUrl={menuPdf?.fileUrl} />
    </>
  )
}

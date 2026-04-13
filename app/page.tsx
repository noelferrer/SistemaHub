import Hero     from '@/modules/hero/Hero'
import About    from '@/modules/about/About'
import Services from '@/modules/services/Services'
import Products from '@/modules/products/Products'
import Contact  from '@/modules/contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
    </>
  )
}

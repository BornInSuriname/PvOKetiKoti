import Hero from '../components/Hero'
import GridSection from '../components/GridSection'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Hero
        title="Herdenking en Vrijheid"
        subtitle="PvO Keti Koti brengt het verleden naar het heden"
        backgroundImage="/images/hero.jpg"
      />
      <GridSection />
      <Timeline />
      <Footer />
    </main>
  )
}
import Hero from '../components/Hero'
import GridSection from '../components/GridSection'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

export default function Home({ timeline }) {
  return (
    <main className="bg-white text-black min-h-screen">
      <Hero title="Herdenking en Vrijheid" subtitle="PvO Keti Koti brengt het verleden naar het heden" backgroundImage="/images/hero.jpg" />
      <GridSection />
      <Timeline items={timeline} />
      <Footer />
    </main>
  )
}

import { client } from '../lib/graphql'
import { GET_TIMELINE_ITEMS } from '../lib/queries'

export async function getStaticProps() {
  try {
    const data = await client.request(GET_TIMELINE_ITEMS)
    return { props: { timeline: data.timelineItems.nodes || [] } }
  } catch (err) {
    return { props: { timeline: [] } }
  }
}

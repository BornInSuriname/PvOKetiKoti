import { client } from '../../lib/graphql'
import { GET_HERDENKINGEN } from '../../lib/queries'

export async function getStaticProps() {
  const data = await client.request(GET_HERDENKINGEN)
  return {
    props: {
      events: data.herdenkingen.nodes
    }
  }
}

export default function Herdenking({ events }) {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Herdenkingen</h1>
      {events.length === 0 ? (
        <p>Geen herdenkingen beschikbaar.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((e, i) => (
            <li key={i}>
              <h2 className="font-bold text-lg">{e.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: e.content }} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

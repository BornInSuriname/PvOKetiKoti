import { client } from '../../lib/graphql'
import { GET_EDUCATIES } from '../../lib/queries'

export async function getStaticProps() {
  const data = await client.request(GET_EDUCATIES)
  return {
    props: {
      items: data.educaties.nodes
    }
  }
}

export default function Educatie({ items }) {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Educatie</h1>
      {items.length === 0 ? (
        <p>Geen lesmateriaal beschikbaar.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i}>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

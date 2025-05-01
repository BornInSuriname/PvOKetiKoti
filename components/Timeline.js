export default function Timeline({ items }) {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tijdlijn</h2>
      {items.length === 0 ? (
        <p>Nog geen tijdlijnitems beschikbaar.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <div className="text-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
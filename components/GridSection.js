export default function GridSection() {
  const sections = [
    { title: 'Geschiedenis', description: 'Lees over het slavernijverleden.', link: '#' },
    { title: 'Herdenking', description: 'Bekijk aankomende evenementen.', link: '#' },
    { title: 'Educatie', description: 'Lesmateriaal voor bewustwording.', link: '#' },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {sections.map((section, idx) => (
        <div key={idx} className="border rounded-xl shadow-md p-4 hover:bg-gray-100">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="mt-2">{section.description}</p>
          <a href={section.link} className="text-blue-600 underline mt-2 block">Lees meer</a>
        </div>
      ))}
    </section>
  )
}
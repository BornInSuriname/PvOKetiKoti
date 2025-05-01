export default function Hero({ title, subtitle, backgroundImage }) {
  return (
    <section className="h-[60vh] bg-cover bg-center text-white flex flex-col justify-center items-center"
             style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="text-4xl font-bold bg-black/50 px-4 py-2 rounded">{title}</h1>
      <p className="text-xl bg-black/50 px-4 py-2 rounded mt-4">{subtitle}</p>
    </section>
  )
}
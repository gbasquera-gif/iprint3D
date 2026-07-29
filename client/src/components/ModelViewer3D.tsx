import "@google/model-viewer";

export const models3D = [
  {
    model: "/models/papagaio.glb",
    title: "Papagaio",
    desc: "Resina 16K · Escultura em detalhe",
  },
];

export default function ModelViewer3D() {
  return (
    <section className="py-24 bg-[#060D1F]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Novidade</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Explore em 3D</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Gire, aproxime e explore nossas esculturas em todos os ângulos, direto no seu navegador — antes mesmo de imprimir a sua.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {models3D.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square w-full max-w-sm bg-[#0D1B3D] border border-white/10">
              <model-viewer
                src={item.model}
                alt={item.title}
                camera-controls
                auto-rotate
                auto-rotate-delay={1500}
                shadow-intensity="1"
                exposure="1"
                loading="lazy"
                style={{ width: "100%", height: "100%", backgroundColor: "#0D1B3D" }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1B3D] to-transparent pointer-events-none flex flex-col justify-end p-6">
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">{item.desc}</p>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Sistema Solar Residencial",
      description:
        "Instalación de sistema fotovoltaico para vivienda con capacidad de hasta 15kW",
      image: "/solar.jpg",
    },
    {
      title: "sistema de video vigilancia con paneles solares",
      description:
        "Sistema de video vigilancia autonomo bajo requerimientos del cliente.",
      image: "/security.jpg",
    },
    {
      title: "cercas electricas alimentadas con paneles solares",
      description:"cercas electricas alimentadas con paneles solares para zonas rurales",
      image: "/cerca.jpg",
    },
  ];

  const phone = "573102159370"; // 👈 cambia por tu número real
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <section className="py-20 bg-gray-100 text-white">
      
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900" >
          Soluciones <span className="text-green-400">Energeticas
          </span>
        </h2>
        <p className="text-gray-900 mt-4">
          Soluciones reales implementadas en ingeniería y tecnología
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            
            {/* Imagen */}
            <img
              src={isProduction ? '/cv' + project.image : project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Botón WhatsApp */}
              <a
                href={`https://wa.me/${phone}?text=Hola, quiero información sobre el proyecto: ${project.title}`}
                target="_blank"
                className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-lg transition"
              >
                Consultar por WhatsApp
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
export default function Projects() {
  const projects = [
    {
      title: "Sistema POS",
      description:
        "Sistema de punto de venta para gestión de ventas y control de inventario.",
      image: "/posjpg.png",
    },
    {
      title: "Reconocimiento facial para seguridad",
      description:
        "Aplicacion de reconocimiento facial para mejorar la seguridad en porterias y control de asistencia en empresas.",
      image: "/face_recgnition.jpg",
    },
    {
      title: "Tienda en línea y marketing digital",
      description:
        "Diseño e implementación de tienda en línea para exteder los nichos llegar a muchos mas clientes.",
      image: "/tienda.jpg",
    },
  ];

  const phone = "573102159370"; // 👈 cambia por tu número real

  return (
    <section className="py-20 bg-gray-100 text-white">
      
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900" >
          Soluciones de <span className="text-green-400">software</span>
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
              src={project.image}
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
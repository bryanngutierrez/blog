"use client";

import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      title: "Diseño de Software",
      slug: "webdesign",
      icon: "💻",
    },
    {
      title: "Sistemas Solares",
      slug: "energy",
      icon: "☀️",
    },
    {
      title: "Reparación de Equipos",
      slug: "repair",
      icon: "🔧",
    },
    {
      title: "Seguridad y Domótica",
      slug: "segurity",
      icon: "🏠",
    },
    {
      title: "Iluminación y Sonido",
      slug: "iluminationandsound",
      icon: "🎵",
    },
  ];

  return (
    <section className="py-20 bg-gray-10 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold">
          Nuestros <span className="text-green-400">Servicios</span>
        </h2>
        <p className="text-gray-900 mt-4">
          Soluciones tecnológicas adaptadas a tus necesidades
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.slug}
            onClick={() => router.push(`/services/${service.slug}`)}
            className="cursor-pointer bg-green-600 border border-slate-700 rounded-2xl p-6 hover:scale-105 hover:border-green-400 transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="text-xl font-bold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-400">
              Ver más detalles →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
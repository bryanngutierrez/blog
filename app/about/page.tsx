export default function About() {
  return (
    <section id="about" className="py-20 text-gray-900 bg-gray-100" >
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Sobre <span className="text-green-400">BGSolve</span>
          </h2>

          <p className="text-gray-900 text-lg leading-relaxed mb-6">
            En <span className="text-green-400 font-semibold">BGSolve</span> desarrollamos soluciones en ingeniería electrónica,
            sistemas energéticos y tecnología aplicada, enfocadas en mejorar la eficiencia y la calidad de vida.
          </p>

          <p className="text-gray-900 leading-relaxed mb-6">
            Diseñamos e implementamos sistemas de automatización, monitoreo de variables,
            energía solar y soluciones inteligentes para hogares, industrias y proyectos tecnológicos.
            Combinamos hardware, software y energía para crear sistemas funcionales y escalables.
          </p>

          <ul className="space-y-2 text-gray-900">
            <li>⚡ Ingeniería electrónica aplicada</li>
            <li>🔋 Sistemas de energía solar</li>
            <li>💻 Desarrollo de software e IoT</li>
            <li>🔧 Mantenimiento y reparación de equipos</li>
            <li>🏠 Domótica y seguridad inteligente</li>
          </ul>
        </div>

        {/* BLOQUE VISUAL */}
        <div className="relative flex justify-center">

          {/* Glow fondo */}
          <div className="absolute w-72 h-72 bg-green-500 opacity-20 blur-3xl rounded-full"></div>

          {/* Icono */}
          <div className="relative bg-green-900 border border-slate-800 rounded-2xl p-10 shadow-xl">

            <svg width="360" height="260" viewBox="0 0 64 64">

              {/* circuito */}
              <line x1="32" y1="32" x2="32" y2="6" stroke="#22C55E" strokeWidth="2"/>
              <line x1="32" y1="32" x2="58" y2="18" stroke="#22C55E" strokeWidth="2"/>
              <line x1="32" y1="32" x2="58" y2="46" stroke="#22C55E" strokeWidth="2"/>
              <line x1="32" y1="32" x2="32" y2="58" stroke="#22C55E" strokeWidth="2"/>
              <line x1="32" y1="32" x2="6" y2="46" stroke="#22C55E" strokeWidth="2"/>
              <line x1="32" y1="32" x2="6" y2="18" stroke="#22C55E" strokeWidth="2"/>

              {/* nodo */}
              <circle cx="32" cy="32" r="5" fill="#22C55E"/>

              {/* rayo */}
              <polygon points="30,14 38,14 33,28 40,28 26,52 31,36 24,36"
                       fill="#FFD60A"/>

            </svg>

            <p className="text-center mt-4 text-white font-semibold">
              Ingeniería + Energía + Hardware + software
            </p>

          </div>
        </div>
      <br />
      </div>
       <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold ">
          Misión y <span className="text-green-400">Visión</span>
        </h2>
        <p className="text-gray-900 mt-4">
          Definimos nuestro propósito y hacia dónde queremos llegar como empresa tecnológica.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* MISIÓN */}
        <div className="bg-green-600 border border-slate-800 rounded-2xl p-8 shadow-lg hover:scale-[1.02] transition">
  

          <h3 className="text-2xl font-bold mb-4 text-white" >
            ⚡ Misión
          </h3>

          <p className="text-gray-300 leading-relaxed">
            En <span className="text-green-400 font-semibold">BGSolve</span> nuestra misión es desarrollar
            soluciones en ingeniería electrónica, automatización y energía que mejoren la eficiencia,
            la seguridad y la calidad de vida de nuestros clientes, integrando tecnología innovadora
            y sostenible.
          </p>
        </div>
        

        {/* VISIÓN */}
        <div className="bg-green-600 border border-slate-800 rounded-2xl p-8 shadow-lg hover:scale-[1.02] transition">
          
          <h3 className="text-2xl font-bold mb-4 text-white">
           🌍  Visión
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Ser una empresa líder en soluciones tecnológicas y energéticas en la región,
            reconocida por su innovación en sistemas electrónicos, energías renovables y
            desarrollo de tecnología inteligente para un futuro más eficiente y sostenible.
          </p>
        </div>

      </div>

    </section>
  );
}
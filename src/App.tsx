import { useState } from 'react'
import BotonColibri from './components/BotonColibri'
import FormularioContacto from './components/FormularioContacto'
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6"
import './index.css'
const VERDE = '#1a4731'
const DORADO = '#c9a84c'
const FONDO = '#f0f7f2'

const seguros = [
  {
    titulo: "Seguro de Vida",
    desc: "Un seguro de vida es más que una póliza, es la promesa de que, pase lo que pase, tus seres queridos podrán mantener su calidad de vida y alcanzar sus sueños, sin preocupaciones económicas.",
    img: "/images/seguroVida.jpeg",
    izq: true
  },
  {
    titulo: "Seguro de Gastos Médicos Mayores",
    desc: "Un accidente o una enfermedad inesperada pueden alterar tu vida en un instante. Esta herramienta te brinda el respaldo necesario para enfrentar estos desafíos sin comprometer tu patrimonio.",
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80",
    izq: false
  },
  {
    titulo: "Seguro de Retiro",
    desc: "Soñar con una jubilación tranquila, libre de preocupaciones financieras, es el primer paso. El siguiente es hacerlo realidad. En un mundo donde las pensiones públicas no son suficientes, tomar las riendas de tu futuro financiero es esencial.",
    img: "/images/retiro.jpeg",
    izq: true
  },
  {
    titulo: "Responsabilidad Civil Profesional",
    desc: "Protege tu ejercicio profesional ante posibles reclamaciones, demandas o errores involuntarios. Esencial para médicos, abogados, contadores y consultores; así como negocios, gimnasios, clínicas, etc.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    izq: false
  },
  {
    titulo: "Seguro para tu Hogar",
    desc: "Protege tu patrimonio contra incendios, robos, desastres naturales y daños estructurales. Incluye cobertura de contenidos y responsabilidad civil.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    izq: true
  },
  {
    titulo: "Seguro para Mascotas",
    desc: "Cuida a tus compañeros fieles con protección veterinaria integral. Cubre consultas, desparasitaciones, esterilizaciones, peluquería estética, limpiezas, cirugías, medicamentos y emergencias para que tus mascotas reciban la mejor atención médica disponible.",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    izq: false
  },
]

const redes = [
  { icon: <FaFacebook size={32} />, label: "Facebook", handle: "/LiliOlveraBustamante", url: "https://www.facebook.com/share/17f7ZMcWeu/" },
  { icon: <FaTiktok size={32} />, label: "Tiktok", handle: "/hiliana-olvera-bustamante", url: "https://www.tiktok.com/@hilianaolveraseguros" },
  { icon: <FaInstagram size={32} />, label: "Instagram", handle: "@liliolverabustamante", url: "https://www.instagram.com/liliolverabustamante" },
]

function App() {
  const whatsapp = "https://wa.me/525555042563"
  const [servicioActivo, setServicioActivo] = useState('')

  return (
    <div className="min-h-screen font-sans" style={{backgroundColor: FONDO}}>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm sticky top-0 z-50">
        <img src="/images/logoAO.jpeg" alt="AO Consultores en Seguros" className="h-24 w-40 object-contain" style={{borderColor: DORADO}} />
        <div className="flex items-center gap-3 text-sm">
          <a href="https://www.canva.com/design/DAG4gXeunLc/QRQ3yWksQ-jjfSMAcyzEMA/view" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 hidden sm:block">Tarjeta de Presentación</a>
          <a href="https://vt.tiktok.com/ZSPAYVu9w/" target="_blank" rel="noreferrer" className="text-white text-xs font-semibold px-3 py-2 rounded-full" style={{backgroundColor: VERDE}}>Video Mascotas</a>
          <a href="https://vt.tiktok.com/ZSPAFwtfN/" target="_blank" rel="noreferrer" className="text-white text-xs font-semibold px-3 py-2 rounded-full" style={{backgroundColor: VERDE}}>Video Retiro</a>
        </div>
      </nav>
      <div style={{backgroundColor: "#c9a84c", height: "3px"}} />

      {/* HERO */}
      <section className="py-16 px-6 text-center" style={{backgroundColor: FONDO}}>
        <h1 className="text-4xl font-bold" style={{color: VERDE}}>AO Consultores en Seguros</h1>
        <p className="text-gray-500 mt-2 mb-10 text-lg">Asesoría Profesional</p>
        <div className="flex flex-row justify-center items-end gap-6 mb-8">
          <div className="flex flex-col items-center gap-2">
            <img src="/images/hilianaOlveraConsult.jpeg" alt="Hiliana Sofía Olvera" className="w-52 h-52 rounded-full object-cover border-4 shadow-xl" style={{objectPosition: "center 15%", borderColor: DORADO}} />
            <span className="text-sm font-semibold" style={{color: VERDE}}>Hiliana Sofía Olvera</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/images/edgarAO.jpeg" alt="Alan Atilano Olvera" className="w-52 h-52 rounded-full object-cover border-4 shadow-xl" style={{objectPosition: "center 10%", borderColor: DORADO}} />
            <span className="text-sm font-semibold" style={{color: VERDE}}>Alan Atilano Olvera</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          {[
            { label: "Asesoría", sub: "Orientación personalizada" },
            { label: "Planes", sub: "Comparación de opciones" },
            { label: "Reclamos", sub: "Gestión rápida y clara" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl px-6 py-4 shadow-sm text-center">
              <div className="font-bold text-sm" style={{color: VERDE}}>{item.label}</div>
              <div className="text-xs text-gray-500 mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
        <p className="max-w-lg mx-auto text-gray-600 text-sm leading-relaxed mb-8">
          Protección integral diseñada específicamente para ti, empresarios, profesionistas, emprendedores y sus familias. Con más de una década de experiencia, ofrecemos soluciones de seguros personalizados que se adapten a tus necesidades y objetivos financieros.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsapp} target="_blank" rel="noreferrer" className="font-semibold px-8 py-3 rounded-full text-white hover:opacity-90 transition" style={{backgroundColor: VERDE}}>Agenda una asesoría</a>
          <a href="https://youtu.be/d9xub9wpQ1E" target="_blank" rel="noreferrer" className="font-semibold px-8 py-3 rounded-full border-2 hover:opacity-80 transition" style={{color: VERDE, borderColor: VERDE}}>Carta de amor ❤️</a>
        </div>
      </section>

      {/* SEGUROS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2" style={{color: VERDE}}>Seguridad y Tranquilidad a tu Medida</h2>
          <p className="text-gray-500 mb-12 text-sm max-w-2xl">Ofrecemos una amplia gama de productos diseñados para proteger cada aspecto importante de tu vida profesional y personal. Cada solución está respaldada por aseguradoras líderes y adaptada a tus necesidades específicas.</p>
          <div className="flex flex-col gap-8">
            {seguros.map((s) => (
              <div key={s.titulo} className="rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row" style={{backgroundColor: FONDO}}>
                {s.izq && <img src={s.img} alt={s.titulo} className="w-full sm:w-64 h-52 sm:h-auto object-cover flex-shrink-0" />}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-lg font-bold mb-3" style={{color: VERDE}}>{s.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <button onClick={() => { setServicioActivo(s.titulo); document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}) }} className="mt-5 self-start text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition" style={{backgroundColor: VERDE}}>Más información</button>
                </div>
                {!s.izq && <img src={s.img} alt={s.titulo} className="w-full sm:w-64 h-52 sm:h-auto object-cover flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 px-6" style={{backgroundColor: FONDO}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2" style={{color: VERDE}}>Contacto:</h2>
          <div style={{width: "60px", height: "3px", backgroundColor: "#c9a84c", marginBottom: "8px"}} />
          <p className="text-gray-600 text-sm mb-8 max-w-2xl">Estamos listos para asesorarte y proteger lo que más valoras. Comunícate con nosotros para una consulta personalizada sin compromiso. Nuestro equipo responderá todas tus preguntas y diseñará la solución de seguros perfecta para ti.</p>
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <BotonColibri href={whatsapp} />
            </div>
<div className="flex flex-col sm:flex-row gap-10 flex-1 items-start">              <div className="text-sm space-y-3">
                <p>🌐 <span className="font-semibold">Sitio web:</span><br />
                  <a href="https://aoconsultoresenseguros.com" className="underline" style={{color: VERDE}}>aoconsultoresenseguros.com</a>
                </p>
                <p>📧 <span className="font-semibold">Email:</span><br />
                  <a href="mailto:hiliana.olvera@aoconsultoresenseguros.com" className="underline" style={{color: VERDE}}>hiliana.olvera@aoconsultoresenseguros.com</a>
                </p>
                <p>📧 <span className="font-semibold">Alan Atilano:</span><br />
                  <a href="mailto:alan.atilano@aoconsultoresenseguros.com" className="underline" style={{color: VERDE}}>alan.atilano@aoconsultoresenseguros.com</a>
                </p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Horario de atención:</p>
                <p>Lunes a viernes de 9:00 a 18:00 hrs</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-6" style={{color: VERDE}}>Agenda tu cita</h3>
            <FormularioContacto servicioSeleccionado={servicioActivo} />
          </div>
        </div>
      </section>

      {/* REDES + QUOTE */}
      <section className="py-16 px-6" style={{backgroundColor: FONDO}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-2" style={{color: VERDE}}>Síguenos en Redes Sociales</h2>
          <div style={{width: "60px", height: "3px", backgroundColor: "#c9a84c", marginBottom: "8px"}} />
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">Mantente actualizado con consejos, noticias del sector asegurador y contenido exclusivo. Únete a nuestra comunidad digital y descubre cómo proteger mejor tu patrimonio.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-12 text-sm mb-10">
            {redes.map((r) => (
              <a key={r.label} href={r.url} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 hover:opacity-80 transition">
                <span style={{color: DORADO}}>{r.icon}</span>
                <span className="font-bold" style={{color: VERDE}}>{r.label}</span>
                <span className="underline text-xs" style={{color: VERDE}}>{r.handle}</span>
              </a>
            ))}
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-block font-semibold px-8 py-3 rounded-full text-white hover:opacity-90 transition mb-12" style={{backgroundColor: VERDE}}>Contáctanos hoy mismo</a>
          <blockquote className="max-w-2xl mx-auto border-l-4 pl-6 py-2 text-left mt-10" style={{borderColor: DORADO}}>
            <p className="italic text-gray-700 text-base leading-relaxed mb-3">"Tu tranquilidad y la de tu familia es nuestra prioridad. Permítenos ser tu aliado en la protección de lo que más amas."</p>
            <p className="font-bold" style={{color: VERDE}}>Hiliana Sofía Olvera Bustamante.</p>
            <p className="text-gray-500 text-sm">Asesora Profesional de Seguros</p>
          </blockquote>
        </div>
      </section>

      {/* ASEGURADORAS + PROCESO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2" style={{color: VERDE}}>Compañías Líderes que Respaldan tu Seguridad</h2>
          <div style={{width: "60px", height: "3px", backgroundColor: "#c9a84c", marginBottom: "8px"}} />
          <p className="text-gray-500 mb-10 max-w-2xl text-sm">Colaboramos exclusivamente con las aseguradoras más reconocidas y confiables del mercado mexicano. Esta alianza estratégica nos permite ofrecerte las mejores opciones, coberturas competitivas y un servicio de excelencia respaldado por empresas sólidas con trayectoria comprobada.</p>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-14">
            {["gnp.jpg","qualitas.jpg","plan-seguro.jpg","insignia-life.jpg","bxmas.webp","ana-seguros.png"].map((logo) => (
              <img key={logo} src={`/images/${logo}`} alt={logo} className="h-10 object-contain grayscale hover:grayscale-0 transition" />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-8">
            {[
              { num: "01", title: "Asesoría Personalizada", desc: "Analizamos tus necesidades específicas y presupuesto para elegir la mejor opción entre nuestras aseguradoras aliadas." },
              { num: "02", title: "Gestión Integral", desc: "Administramos tus pólizas y siniestros de principio a fin para que tu experiencia sea sencilla, transparente y sin complicaciones." },
              { num: "03", title: "Acompañamiento Continuo", desc: "Más de 10 años respaldando a nuestros clientes en la protección de su patrimonio y el bienestar de ellos y sus familias." },
            ].map((item) => (
              <div key={item.num}>
                <div className="text-2xl font-bold mb-1" style={{color: DORADO}}>{item.num}</div>
                <h3 className="font-bold mb-2" style={{color: VERDE}}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-5 flex gap-3 items-start text-sm" style={{backgroundColor: '#e8f5ee'}}>
            <span style={{color: DORADO}} className="text-lg mt-0.5">✦</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-bold" style={{color: VERDE}}>Compromiso con la excelencia: </span>Nuestro objetivo es brindarte paz mental mediante soluciones de seguros que realmente protejan lo que más valoras. Cada cliente recibe atención dedicada y seguimiento personalizado.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS + STATS */}
      <section className="py-16 px-6" style={{backgroundColor: '#fde8e8'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2" style={{color: VERDE}}>Testimonios de Clientes Satisfechos</h2>
          <div style={{width: "60px", height: "3px", backgroundColor: "#c9a84c", marginBottom: "8px"}} />
          <p className="text-gray-600 mb-10 max-w-2xl text-sm">La confianza de nuestros clientes es nuestro mayor logro. Conoce las experiencias reales de empresarios, profesionistas y familias que han encontrado en Atilano Olvera Consultores el aliado perfecto para proteger su patrimonio y tranquilidad.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {[
              { name: "Carlos M., Empresario", text: "Hiliana Olvera nos ayudó a encontrar el seguro ideal para nuestra empresa y familia con atención cercana y profesional. Su conocimiento del mercado y dedicación hicieron toda la diferencia en nuestra decisión." },
              { name: "Ethelvina M., Abogada", text: "Gracias Hiliana, por ser parte de un buen pasado, un increíble presente y ser parte ya, de la bendición del futuro de mi familia. La asesoría fue clara y me he sentido acompañada en cada paso del proceso." },
              { name: "Luis R., Colaborador", text: "La asesoría en gastos médicos y autos fue clara y eficiente, resolvieron todas mis dudas rápidamente. El seguimiento post-venta ha sido excepcional, siempre disponibles cuando los necesito." },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="text-4xl font-serif leading-none mb-3" style={{color: DORADO}}>"</div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">{t.text}</p>
                <div className="text-4xl font-serif leading-none text-right" style={{color: DORADO}}>"</div>
                <p className="mt-3 font-semibold text-sm" style={{color: VERDE}}>{t.name}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 mb-10 text-center">
            {[
              { num: "10+", label: "Años de experiencia", sub: "Protegiendo patrimonios y familias" },
              { num: "500+", label: "Clientes satisfechos", sub: "Empresarios y profesionistas" },
              { num: "6", label: "Aseguradoras líderes", sub: "Alianzas estratégicas" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold" style={{color: DORADO}}>{s.num}</div>
                <div className="font-semibold text-sm mt-1" style={{color: VERDE}}>{s.label}</div>
                <div className="text-gray-500 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-block font-semibold px-8 py-3 rounded-full text-white hover:opacity-90 transition" style={{backgroundColor: VERDE}}>Agradecemos tus comentarios</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{backgroundColor: DORADO, height: "4px"}} />
      <footer className="py-8 text-white text-center" style={{backgroundColor: VERDE}}>
        <img src="/images/logoAO.jpeg" alt="AO Consultores en Seguros" className="mx-auto mb-4 w-20 h-20 object-contain" style={{borderColor: DORADO}} />
        <p className="font-semibold text-sm">Atilano Olvera Consultores en Seguros</p>
        <p className="text-green-300 text-xs mt-1">© 2026 Todos los derechos reservados.</p>
      </footer>

    </div>
  )
}

export default App

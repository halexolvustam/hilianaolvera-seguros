import React, { useState } from 'react'

const VERDE = '#1a4731'
const DORADO = '#c9a84c'

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoSeguro: '',
    edad: '',
    tieneFamilia: '',
    presupuesto: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Gracias por tu información. Te contactaremos pronto.')
  }

  const tiposSeguro = [
    { value: '', label: 'Selecciona un tipo de seguro' },
    { value: 'vida', label: 'Seguro de Vida' },
    { value: 'gastos-medicos', label: 'Gastos Médicos Mayores' },
    { value: 'retiro', label: 'Seguro de Retiro' },
    { value: 'responsabilidad', label: 'Responsabilidad Civil Profesional' },
    { value: 'hogar', label: 'Seguro para tu Hogar' },
    { value: 'mascotas', label: 'Seguro para Mascotas' },
    { value: 'empresarial', label: 'Seguro Empresarial' },
    { value: 'auto', label: 'Seguro de Auto' }
  ]

  const presupuestos = [
    { value: '', label: 'Rango de presupuesto mensual' },
    { value: 'menos-1000', label: 'Menos de $1,000 MXN' },
    { value: '1000-3000', label: '$1,000 - $3,000 MXN' },
    { value: '3000-5000', label: '$3,000 - $5,000 MXN' },
    { value: '5000-10000', label: '$5,000 - $10,000 MXN' },
    { value: 'mas-10000', label: 'Más de $10,000 MXN' }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">
      <h3 className="text-xl font-bold mb-6 text-center" style={{color: VERDE}}>Cuéntanos sobre ti</h3>
      <p className="text-gray-600 text-sm mb-6 text-center">Esta información nos ayudará a orientarte hacia la mejor opción de seguro para tus necesidades.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
              style={{focusRingColor: VERDE}}
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
              placeholder="55 1234 5678"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Edad</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              min="18"
              max="100"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
              placeholder="Ej: 35"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué tipo de seguro te interesa? *</label>
          <select
            name="tipoSeguro"
            value={formData.tipoSeguro}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none bg-white"
          >
            {tiposSeguro.map(tipo => (
              <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">¿Tienes familia a cargo?</label>
            <select
              name="tieneFamilia"
              value={formData.tieneFamilia}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none bg-white"
            >
              <option value="">Selecciona una opción</option>
              <option value="si">Sí, cónyuge e hijos</option>
              <option value="si-conyuge">Sí, solo cónyuge</option>
              <option value="si-hijos">Sí, solo hijos</option>
              <option value="no">No tengo familia a cargo</option>
              <option value="padres">Padres dependientes</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Presupuesto mensual estimado</label>
            <select
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none bg-white"
            >
              {presupuestos.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Hay algo más que quieras contarnos?</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none resize-none"
            placeholder="Describe tu situación, necesidades específicas, o cualquier duda que tengas..."
          />
        </div>

        {/* BOTÓN DE CALENDLY - Este es el enlace que vincula al servicio */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3 text-center">¿Prefieres agendar una cita directamente?</p>
          <a
            href="https://calendly.com/hiliana-olvera/asesoria"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center py-3 px-6 rounded-lg font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
            style={{backgroundColor: DORADO, color: VERDE}}
          >
            📅 Agendar reunión virtual en Calendly
          </a>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
            style={{backgroundColor: VERDE}}
          >
            Enviar información
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Al enviar, aceptas que te contactemos vía WhatsApp o correo electrónico.
        </p>
      </form>
    </div>
  )
}

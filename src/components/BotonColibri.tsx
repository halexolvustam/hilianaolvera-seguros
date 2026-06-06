import React from 'react'

const VERDE = '#1a4731'
const DORADO = '#c9a84c'

interface Props {
  href: string
}

export default function BotonColibri({ href }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
      <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="circulo" d="M 90,90 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0" />
        </defs>
        <circle cx="90" cy="90" r="75" fill={VERDE} />
        <circle cx="90" cy="90" r="75" fill="none" stroke={DORADO} strokeWidth="3" />
        <text fontSize="11" fontWeight="bold" letterSpacing="1.8" fill={DORADO} fontFamily="sans-serif">
          <textPath href="#circulo" startOffset="0%">SOLICITA UNA ASESORÍA &nbsp;&nbsp; SOLICITA UNA ASESORÍA &nbsp;&nbsp;</textPath>
        </text>
        <clipPath id="circleclip">
          <circle cx="90" cy="90" r="38" />
        </clipPath>
        <image
          href="/images/logo-hiliana.jpeg"
          x="52" y="52"
          width="76" height="76"
          clipPath="url(#circleclip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </a>
  )
}

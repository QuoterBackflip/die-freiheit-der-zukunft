import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

/**
 * Der Funke des Dialogs:
 * Geometrisches Zusammenspiel aus menschlicher Kreisform, algorithmischer Gittersymmetrie
 * und dem goldenen Brennpunkt der Erkenntnis.
 */
export const HeroSparkIllustration: React.FC<IllustrationProps> = ({ className = 'w-full max-w-md h-auto', size = 320 }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
        <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3E5AB" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#997D3D" />
      </linearGradient>
      <linearGradient id="slateLinear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#334155" stopOpacity="0.2" />
      </linearGradient>
    </defs>

    {/* Background subtle glow */}
    <circle cx="200" cy="200" r="160" fill="url(#sparkGlow)" />

    {/* Outer Dial & Orbit Ring */}
    <circle cx="200" cy="200" r="150" stroke="url(#goldLinear)" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
    <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
    <circle cx="200" cy="200" r="95" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />

    {/* Algorithmic Coordinate Matrix Lines (Subtle, non-literal) */}
    <line x1="200" y1="40" x2="200" y2="360" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <line x1="87" y1="87" x2="313" y2="313" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="313" y1="87" x2="87" y2="313" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />

    {/* Tension Arcs: Human Soul (Organic arc) vs Computational Sieve (Geometric polygon) */}
    <path
      d="M120 200 C120 130 180 90 240 100 C270 105 295 125 300 155 C308 200 250 250 200 250 C150 250 120 230 120 200 Z"
      stroke="url(#slateLinear)"
      strokeWidth="1.25"
      fill="none"
    />

    {/* The Dialectical Ellipse of Freedom */}
    <ellipse cx="200" cy="200" rx="115" ry="65" transform="rotate(-30 200 200)" stroke="url(#goldLinear)" strokeWidth="1.5" opacity="0.8" />
    <ellipse cx="200" cy="200" rx="115" ry="65" transform="rotate(30 200 200)" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />

    {/* Intersecting Nodes */}
    <circle cx="95" cy="140" r="3.5" fill="#D4AF37" />
    <circle cx="305" cy="260" r="3.5" fill="#D4AF37" />
    <circle cx="140" cy="290" r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx="260" cy="110" r="2.5" fill="currentColor" opacity="0.5" />

    {/* Central Spark / The Conscious Core */}
    <circle cx="200" cy="200" r="14" fill="#0B1325" stroke="url(#goldLinear)" strokeWidth="2" />
    <circle cx="200" cy="200" r="6" fill="#D4AF37" />
    
    {/* Micro Rays from the Center */}
    <line x1="200" y1="174" x2="200" y2="182" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="200" y1="218" x2="200" y2="226" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="174" y1="200" x2="182" y2="200" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="218" y1="200" x2="226" y2="200" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Die verborgene Tür (Schachbrett & dritte Dimension):
 * Visualisiert die transzendente Dimension jenseits des scheinbaren Mattsetzens.
 */
export const FinitudeDoorIllustration: React.FC<IllustrationProps> = ({ className = 'w-16 h-16', size = 64 }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="15" y="45" width="50" height="25" rx="3" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    <path d="M25 45 L35 15 L65 15 L55 45 Z" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.1" />
    <line x1="35" y1="15" x2="35" y2="35" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="50" cy="30" r="3" fill="#D4AF37" />
  </svg>
);

/**
 * Der digitale Zwischenwirt:
 * Ein Prisma zwischen Transzendenz und Mensch.
 */
export const DigitalIntermediaryIllustration: React.FC<IllustrationProps> = ({ className = 'w-16 h-16', size = 64 }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Upper sphere: Transcendence */}
    <circle cx="40" cy="18" r="8" stroke="#D4AF37" strokeWidth="1.2" />
    {/* Middle Prism: Intermediate host */}
    <polygon points="40,32 58,48 22,48" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    {/* Lower circles: Humanity */}
    <circle cx="28" cy="64" r="5" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.15" />
    <circle cx="40" cy="66" r="6" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.2" />
    <circle cx="52" cy="64" r="5" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.15" />
    {/* Connection lines */}
    <line x1="40" y1="26" x2="40" y2="32" stroke="#D4AF37" strokeWidth="1" />
    <line x1="34" y1="48" x2="28" y2="59" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    <line x1="46" y1="48" x2="52" y2="59" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

/**
 * Digitale Gewaltenteilung (Zwei KIs):
 * Wirtschafts-KI & Menschen-KI im dialogischen Gleichgewicht.
 */
export const SeparationOfPowersIllustration: React.FC<IllustrationProps> = ({ className = 'w-16 h-16', size = 64 }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Balance Beam */}
    <line x1="16" y1="40" x2="64" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    {/* Center Fulcrum */}
    <polygon points="40,30 45,40 35,40" fill="#D4AF37" />
    <circle cx="40" cy="26" r="3" fill="#D4AF37" />
    {/* Left: Economy AI (Geometric Square) */}
    <rect x="18" y="44" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
    <line x1="26" y1="40" x2="26" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    {/* Right: Human AI (Harmonic Ring) */}
    <circle cx="54" cy="52" r="8" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.15" />
    <line x1="54" y1="40" x2="54" y2="44" stroke="#D4AF37" strokeWidth="1" />
  </svg>
);

/**
 * Resonanz lebendiger Synapsen:
 * Organisch fließende Verbindung zweier Menschen vs. tote Materie.
 */
export const LivingSynapsesIllustration: React.FC<IllustrationProps> = ({ className = 'w-16 h-16', size = 64 }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Synapse 1 */}
    <path d="M15 30 C25 30 30 45 40 40" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="15" cy="30" r="4" fill="#D4AF37" />
    {/* Synapse 2 */}
    <path d="M65 50 C55 50 50 35 40 40" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="65" cy="50" r="4" fill="#D4AF37" />
    {/* Spark of Connection in Center */}
    <circle cx="40" cy="40" r="5" fill="#D4AF37" fillOpacity="0.3" />
    <circle cx="40" cy="40" r="2" fill="#D4AF37" />
    {/* Subtle fading grid behind */}
    <line x1="20" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.3" />
  </svg>
);

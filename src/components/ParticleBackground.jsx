function ParticleBackground() {
  const particles = Array.from({ length: 120 })

  return (
    <div className="particle-container">
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,

            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,

            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground
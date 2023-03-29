// import { useEffect, useRef } from 'react'

// function Particle({ x, y, directionX, directionY, size, color, ctx }) {
//   const draw = () => {
//     ctx.beginPath()
//     ctx.arc(x, y, size, 0, Math.PI * 2, false)
//     ctx.fillStyle = color
//     ctx.fill()
//   }

//   const update = () => {
//     if (x + size > window.innerWidth || x - size < 0) {
//       directionX = -directionX
//     }
//     if (y + size > window.innerHeight || y - size < 0) {
//       directionY = -directionY
//     }
//     x += directionX
//     y += directionY
//     draw()
//   }

//   return <>{update()}</>
// }

// function ParticleField() {
//   const canvasRef = useRef(null)
//   let particleArray = []

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight

//     for (let i = 0; i < 100; i++) {
//       let size = Math.random() * 20
//       let x = Math.random() * (canvas.width - size * 2)
//       let y = Math.random() * (canvas.height - size * 2)
//       let directionX = Math.random() * 1 - 0.5
//       let directionY = Math.random() * 1 - 0.5
//       let color = 'white'
//       particleArray.push({ x, y, directionX, directionY, size, color })
//     }

//     const animate = () => {
//       requestAnimationFrame(animate)
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       particleArray.forEach((particle) => {
//         Particle({ ...particle, ctx })
//       })
//     }

//     animate()

//     window.addEventListener('resize', () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//       particleArray = []
//       for (let i = 0; i < 100; i++) {
//         let size = Math.random() * 20
//         let x = Math.random() * (canvas.width - size * 2)
//         let y = Math.random() * (canvas.height - size * 2)
//         let directionX = Math.random() * 1 - 0.5
//         let directionY = Math.random() * 1 - 0.5
//         let color = 'white'
//         particleArray.push({ x, y, directionX, directionY, size, color })
//       }
//       animate()
//     })
//   }, [])

//   return <canvas ref={canvasRef} />
// }

// export default ParticleField
import { useRef, useEffect } from 'react'

function ParticleField() {
  class Particle {
    constructor(x, y, directionX, directionY, size, color, context) {
      this.x = x
      this.y = y
      this.directionX = directionX
      this.directionY = directionY
      this.size = size
      this.color = color
      this.context = context
    }

    draw() {
      this.context.beginPath()
      this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
      this.context.fillStyle = this.color
      this.context.fill()
    }

    update() {
      if (
        this.x + this.size > this.context.canvas.width ||
        this.x - this.size < 0
      ) {
        this.directionX = -this.directionX
      }
      if (
        this.y + this.size > this.context.canvas.height ||
        this.y - this.size < 0
      ) {
        this.directionY = -this.directionY
      }
      this.x += this.directionX
      this.y += this.directionY
      this.draw()
    }
  }
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth / 2
    canvas.height = window.innerHeight

    let particleArray = []
    console.log(window.innerHeight)
    function init() {
      particleArray = []
      for (let i = 0; i < 100; i++) {
        let size = Math.random() * 20
        let x = Math.random() * (canvas.width - size * 2)
        let y = Math.random() * (canvas.height - size * 2)
        let directionX = Math.random() * 1 - 0.5
        let directionY = Math.random() * 1 - 0.5
        let color = 'white'
        particleArray.push(
          new Particle(x, y, directionX, directionY, size, color, context)
        )
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      context.clearRect(0, 0, canvas.width, canvas.height)
      particleArray.forEach((particle) => {
        particle.update()
      })
    }

    init()
    animate()

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth / 2
      canvas.height = window.innerHeight
      init()
    })

    return () => window.removeEventListener('resize', () => {})
  }, [])

  return (
    <canvas
      className="min-h-screen"
      style={{ background: 'linear-gradient(#25364f, #4d71a5, #9bc4ff)' }}
      ref={canvasRef}
    />
  )
}

export default ParticleField

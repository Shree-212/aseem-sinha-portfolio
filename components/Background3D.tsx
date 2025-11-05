'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import styles from './Background3D.module.css'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  
  const particlesCount = 2000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 12
      positions[i3 + 1] = (Math.random() - 0.5) * 12
      positions[i3 + 2] = (Math.random() - 0.5) * 12
    }
    
    return positions
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (ref.current) {
      ref.current.rotation.x = time * 0.08
      ref.current.rotation.y = time * 0.1
      ref.current.rotation.z = time * 0.03
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFD4B3"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

function FloatingShapes() {
  const group = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (group.current) {
      group.current.rotation.x = Math.sin(time * 0.5) * 0.2
      group.current.rotation.y = Math.cos(time * 0.3) * 0.2
      group.current.rotation.z = Math.sin(time * 0.25) * 0.1
    }
  })

  return (
    <group ref={group}>
      {/* Donuts */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={`torus-${i}`}
          position={[
            Math.sin(i * 2) * 4,
            Math.cos(i * 1.5) * 3,
            Math.sin(i) * -3
          ]}
          rotation={[i * 0.5, i * 0.3, 0]}
        >
          <torusGeometry args={[0.4, 0.12, 16, 32]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#FFB38A' : '#FFD4A3'}
            transparent
            opacity={0.5}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

function ShootingStars() {
  const starsRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (starsRef.current) {
      starsRef.current.children.forEach((star, i) => {
        // Shooting movement
        star.position.x -= 0.05
        star.position.y -= 0.03
        
        // Reset position when off screen
        if (star.position.x < -8) {
          star.position.x = 8
          star.position.y = (Math.random() - 0.5) * 10
          star.position.z = (Math.random() - 0.5) * 10
        }
        
        // Rotation for trail effect
        star.rotation.z += 0.05
      })
    }
  })

  return (
    <group ref={starsRef}>
      {[...Array(4)].map((_, i) => (
        <mesh
          key={`star-${i}`}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
          <meshBasicMaterial
            color="#FFE4B3"
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}

function Bubbles() {
  const bubblesRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (bubblesRef.current) {
      bubblesRef.current.children.forEach((bubble, i) => {
        // Floating upward movement
        bubble.position.y += 0.02
        
        // Wobble effect
        bubble.position.x += Math.sin(time * 2 + i) * 0.005
        bubble.position.z += Math.cos(time * 2 + i) * 0.005
        
        // Reset when reaching top
        if (bubble.position.y > 8) {
          bubble.position.y = -8
          bubble.position.x = (Math.random() - 0.5) * 12
          bubble.position.z = (Math.random() - 0.5) * 12
        }
        
        // Scale pulse
        const scale = 1 + Math.sin(time * 3 + i) * 0.1
        bubble.scale.set(scale, scale, scale)
      })
    }
  })

  return (
    <group ref={bubblesRef}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`bubble-${i}`}
          position={[
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 12
          ]}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? '#FFD4D4' : i % 3 === 1 ? '#FFE4E1' : '#FFD4A3'}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

function FlippingDonuts() {
  const donutsRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (donutsRef.current) {
      donutsRef.current.children.forEach((donut, i) => {
        // Flipping animation
        donut.rotation.x += 0.02 * (i % 2 === 0 ? 1 : -1)
        donut.rotation.y += 0.03 * (i % 2 === 0 ? -1 : 1)
        
        // Orbital movement
        const radius = 3 + i * 0.3
        const speed = 0.5 + i * 0.1
        donut.position.x = Math.cos(time * speed + i * 2) * radius
        donut.position.z = Math.sin(time * speed + i * 2) * radius
        donut.position.y = Math.sin(time * 0.5 + i) * 2
      })
    }
  })

  return (
    <group ref={donutsRef}>
      {[...Array(4)].map((_, i) => (
        <mesh key={`flipping-donut-${i}`}>
          <torusGeometry args={[0.5, 0.15, 20, 40]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#FFB38A' : '#FFA6C9'}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Background3D() {
  return (
    <div className={styles.background}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingShapes />
        <ShootingStars />
        <Bubbles />
        <FlippingDonuts />
      </Canvas>
    </div>
  )
}

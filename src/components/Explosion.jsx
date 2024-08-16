
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Explosion = ({ position, onComplete }) => {
  const ref = useRef();
  const numParticles = 100;
  

  const positions = new Float32Array(numParticles * 3); // x, y, z for each particle
  for (let i = 0; i < numParticles; i++) {
    const angle = (i / numParticles) * Math.PI * 2;
    const radius = Math.random();
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.random() * 2;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useEffect(() => {
  
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Points geometry={geometry} position={position} ref={ref}>
      <PointMaterial color="red" size={0.1} transparent opacity={0.7} />
    </Points>
  );
};

export default Explosion;

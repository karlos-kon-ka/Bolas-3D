// src/components/Scene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Ground from './Ground';
import Drop from './Drop';
import Lighting from './Lighting';
import Controls from './Controls';
import { WindProvider } from './WindContext';

const Scene = () => {
  return (
    <WindProvider>
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 50 }}
        style={{ height: '100vh', width: '100%' }}
      >
        <color attach="background" args={['#87CEEB']} />
        <fog attach="fog" args={['#87CEEB', 25, 50]} /> {/* Ajuste de niebla */}
        <Lighting />
        <Physics>
          <Ground />
          {[...Array(50)].map((_, i) => (
            <Drop key={i} position={[Math.random() * 10 - 5, 10 + Math.random() * 5, Math.random() * 10 - 5]} />
          ))}
        </Physics>
        <Controls />
      </Canvas>
    </WindProvider>
  );
};

export default Scene;

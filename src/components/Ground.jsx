// src/components/Ground.jsx
import React from 'react';
import { usePlane } from '@react-three/cannon';

const Ground = () => {
  const [ref] = usePlane(() => ({
    position: [0, -0.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
    material: {
      friction: 1,
   
    },
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#228B22" />
    </mesh>
  );
};

export default Ground;

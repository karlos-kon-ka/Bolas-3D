
import React, { useRef, useState } from 'react';
import { useSphere } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

const Drop = ({ position }) => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.2],
    material: {
      friction: 0.1,
      restitution: 1.5, // Controla el rebote
    }
  }));

  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState('blue'); 

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setColor('red'); 
     
      api.applyImpulse([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ]);
    }
  };

 
  useFrame(() => {
    if (isClicked) {
      ref.current.material.opacity = Math.max(ref.current.material.opacity - 0.01, 0);
      if (ref.current.material.opacity <= 0) {
        setIsClicked(false);
        ref.current.material.opacity = 0.8; 
      }
    }
  });

  return (
    <mesh ref={ref} onClick={handleClick} castShadow receiveShadow>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

export default Drop;

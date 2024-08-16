
import { useContext } from 'react';
import { OrbitControls } from '@react-three/drei';
import { WindContext } from './WindContext';

const Controls = () => {
  const { setWindDirection } = useContext(WindContext);

  const handleWindLeft = () => {
    setWindDirection([-5, 0]); // Viento hacia la izquierda
  };

  const handleWindRight = () => {
    setWindDirection([5, 0]); // Viento hacia la derecha
  };

  return (
    <>
      <OrbitControls enablePan={true} enableZoom={true} />

      
    </>
  );
};

export default Controls;

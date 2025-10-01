
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

const RotatingObject = () => {
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01));
  return (
    <Icosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial color="hotpink" wireframe />
    </Icosahedron>
  );
};

const Hero3D = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingObject />
    </Canvas>
  );
};

export default Hero3D;

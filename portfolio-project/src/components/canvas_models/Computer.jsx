import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const model = useGLTF('./retro_computer.glb');
  const modelRef = useRef();

  
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; 
    }
  });

  return (
    <mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 1]} intensity={0.5} />
      <pointLight position={[10, 5, 10]} intensity={0.5}/>
      <spotLight position={[0, 50, 10]} intensity={2}/>
      <primitive
        ref={modelRef}
        object={model.scene}
        scale={isMobile ? 7.8 : 7.8}
        position={isMobile ? [0, -2.8, 0] : [0, -2.8 , 0]}
        rotation={[0.0, 0.8, 0.0]}
      />
    </mesh>
  )
}

const Computer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default Computer;
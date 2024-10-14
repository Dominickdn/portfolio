import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

  //load model
const Computers = ({ isMobile, spinning }) => {
  const model = useGLTF('./retro_computer.glb');
  const modelRef = useRef();

  // Rotate 
  useFrame(() => {
    if (modelRef.current && spinning) {
      isMobile ? modelRef.current.rotation.y += 0.004 : modelRef.current.rotation.y += 0.002; // Speed of rotation
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
        scale={isMobile ? 10 : 8.5}
        position={isMobile ? [0, -3.5, 0] : [0, -3.5 , 0]}
        rotation={[0.0, 0.8, 0.0]}
      />
    </mesh>
  );
}

const Computer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [spinning, setSpinning] = useState(true);

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

  const handleSpinToggle = () => {
    setSpinning(prevSpinning => !prevSpinning);
  };

  return (
     <>
     <div className="flex flex-col w-full h-5/6 items-center">
      <Canvas
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        onClick={handleSpinToggle}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} spinning={spinning}/>
        </Suspense>
        <Preload all />
      </Canvas>
      </div>
      </>
  );
}

export default Computer;
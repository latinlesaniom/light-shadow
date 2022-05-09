import './App.css';
import {OrbitControls} from '@react-three/drei'
import {Canvas, useFrame} from 'react-three-fiber'
import {Physics, useSphere, useBox, usePlane} from '@react-three/cannon'
import { MeshBasicMaterial } from 'three';


function Sphere(props){



  return(
    <>
    <mesh
      {...props}
      castShadow
      receiveShadow
    >
      <sphereGeometry attach='geometry' args={[1, 16, 16]} />
      <meshPhongMaterial attach='material' color='white' />
    </mesh>
    </>
  )
}

function Plane(props){



  return(
    <>
      <mesh
        {...props}
        receiveShadow={true}
        >
        <planeGeometry  attach='geometry' args={[20, 20]} />
        <meshStandardMaterial attach='material' color='#F2C1AE'/>
      </mesh>
    </>
  )
}


function Scene(){
  return(
    <>
    <ambientLight intensity={0.1} />
    <pointLight castShadow intensity={0.5} position={[2, 5, 4]} color={'white'} angle={0.5} />

      <Plane rotation={[-Math.PI * 0.5, 0, 0]} />
      <Sphere position={[0, 1, 0]}  />

    <OrbitControls />
    </>
  )
}


function App() {
  return (
   <>
    <Canvas 
    shadows  
    camera={{
      position: [-Math.PI * 0.5, 10, 5],
      near: 0.1,
      far: 500,
    }}  
  
    >
     <Scene />
    </Canvas>   
   </>
  );
}

export default App;

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import BaseLayout from '../components/BaseLayout';
import Card from '../components/Section/Card'

const Box = props => {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [6, 6, 6] : [5, 5, 5]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#2b6c76' : '#720b23'}
      />
    </mesh>
  )
}


function Content(){
  return(
    <>
      <h1>Hellooo</h1>
      <Card/>
      <Card/>
      <Card/>
    </>
  );
}

function Bg(){
  return(
    <Canvas  camera={{ position: [0, 0, 38] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Box position={[10, 0, 0]} />
        <Box position={[-10, 0, -10]} />
        <Box position={[-10, 0, 0]} />
        <Box position={[-10, 10, 0]} />
        <Box position={[0, 10, 0]} />
        <Box position={[0, -10, 0]} />
        <Box position={[-10, -10, 0]} />
      </Suspense>
    </Canvas>
  );
}
const Boxes = () => {
  return (
    <BaseLayout 
    content={ <Content/> }
    bg={ <Bg/> }
    />
  )
}


export default Boxes

import * as THREE from 'three';
import React, { useRef, useState, Suspense , useLayoutEffect, useEffect } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import BaseLayout from '../components/BaseLayout';
import Card from '../components/Section/Card';
import Section from '../components/Section/Section';
import FirstPart from '../components/Content/FirstPart';

const Box = props => {

  

  const mesh = useRef()

  function updateCamera(ev) {
    console.log()
    // let div1 = document.getElementById("div1");
    // camera.position.x = 10 - window.scrollY / 500.0;
    // camera.position.z = 10 - window.scrollY / 500.0;
  }

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.00))

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
      <FirstPart/>
      <Section>
        <Card>
          <h2>
            Projects
          </h2>
        </Card>
        <Card>
          <h2>
            Skills
          </h2>
        </Card>
      </Section>
      
    </>
  );
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 5, mouse.y * 5, camera.position.z), 0.2))
}






function Bg(){

  const [scrollOffset, setScrollOffset] = useState(0);


  // console.log(scrollOffset);

  

  useLayoutEffect(() => {
    window.onscroll = () => {
      setScrollOffset(window.pageYOffset)
    }
  });


  function MoveOnScroll() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(1, 1, 10 + scrollOffset/80), 0.5))
  }

  const cameraConfig = { 
    position: [0, 0, 40 ],
    
  }
  
  return(
    <Canvas  camera={cameraConfig}>
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
      <MoveOnScroll/>
      <Rig />
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

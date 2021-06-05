import * as THREE from 'three';
import React, { useRef, useState, Suspense , useLayoutEffect, useEffect } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import BaseLayout from '../components/BaseLayout';
import Card from '../components/Section/Card';
import Section from '../components/Section/Section';
import FirstPart from '../components/Content/FirstPart';
import Projects from '../components/Content/Projects';
import { useSpring, animated } from 'react-spring';

const Box = props => {

  
  // api.start({ opacity: toggle ? 1 : 0 })
  // function DivAnimatedSpringTest(){
    
    

  //   return (
  //     <animated.div className="pointerEventAuto" style={styles}>
  //         i will fade
  //         <button onClick={() => setToggle(0)} className="pointerEventAuto">Press</button>    
  //     </animated.div>
  //   );
  // }

  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // const [toggle, setToggle] = useState(false);

  const { scale } = useSpring({
    scale: active ? [10, 10, 10] : [20, 20, 20],
    form: {
      scale:[20, 20, 20],
    }
  })

  useFrame(() => {
    (mesh.current.rotation.x = mesh.current.rotation.y += 0.00)
  })

  return (
    <mesh
      // as={animated.mesh}
      {...props}
      ref={mesh}
      scale={active ? [ 6, 6, 6 ] : [ 5, 5, 5 ]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#2b6c76' : '#de2424'}
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
          <Projects/>
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

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

function Rig() {

  

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return (<></>)
  }else{


    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()

    const mousePosition = useMousePosition();

    // return useFrame(() => {
    //   camera.position.lerp(vec.set( mousePosition.x/100   , mousePosition.y / 100, camera.position.z), 0.2)
    //   // camera.rotation.y = mousePosition.x / 500
    //   // camera.rotation.y = Math.sin() 
    // })

    return useFrame(() => {
      camera.position.lerp(vec.set( mouse.x * 20, mouse.y * 5, camera.position.z), 0.2)
      camera.rotation.y = mouse.x / 5
      // camera.rotation.y = Math.sin() 
    })
    return useFrame(() =>  camera.rotation.y = mouse.x / 5  )
    // return useFrame(() =>  camera.rotation.y = rotation  )
  }
}

// function RigRotation() {

//   const [active, setActive] = useState(false)
//   const { rot } = useSpring({
//     rotation: active ? [15, 0, 20] : [0, 0, 0],
//   })

//   const { camera, mouse } = useThree()
//   const vec = new THREE.Vector3()

//   return (
//     <group>
//       <animated.camera rotation={rot}>

//       </animated.camera>
//     </group>
//   )
  
// }


function MoveOnScroll() {

  // useLayoutEffect(() => console.log(window.pageYOffset), [])
  
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(1, 1, 1 + window.pageYOffset/30), 0.5) )

  
}



function Bg(){


  const cameraConfig = { 
    position: [0, 0, 0 ],
    
  }
  
  return(
    <Canvas className="canvas" camera={cameraConfig}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Box position={[10, 0, 0]} />
        <Box position={[-10, 0, 0]} />
        <Box position={[-10, 10, 0]} />
        <Box position={[0, 10, 0]} />
        <Box position={[0, -10, 0]} />
        <Box position={[-10, -10, 0]} />
      </Suspense>
      <MoveOnScroll/>
      <Rig/>
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

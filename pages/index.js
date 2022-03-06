import * as THREE from 'three';
import React, { useRef, useState ,useCallback, Suspense , useEffect, useContext } from 'react';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import BaseLayout from '../components/BaseLayout';
import Card from '../components/Section/Card';
import Section from '../components/Section/Section';
import FirstPart from '../components/Content/FirstPart';
import Projects from '../components/Content/Projects';
import Contact from '../components/Content/Contact';
import { useSpring } from 'react-spring';
import { a } from '@react-spring/three';
import GlobalStates, {Context} from '../components/globalStates';



import { OrbitControls, OrthographicCamera, Text, Shadow, useGLTF } from '@react-three/drei'
import { ref } from 'yup';


const Model = () => {
  const deskModel = ('./glb/EscrivaninhaV3.glb')


  const gltf = useGLTF(deskModel)
  return <primitive object={gltf.scene} dispose={null} />
}

const Box = props => {

  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(0)

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension:400, friction:50, precision: 0.0001}
  })
  

  const scale = spring.to([0, 1] , [ 6, 4])
  const color = spring.to([0, 1] , [ '#2b6c76', '#de2424'])

  useFrame(() => {
    (mesh.current.rotation.x = mesh.current.rotation.y += 0.02)
  })

  useEffect(() => {
    setActive(1)
    console.log(scale)
  }, [])

  return (
    <a.mesh
      {...props}
      ref={mesh}

      scale-x={ scale }
      scale-y={ scale }
      scale-z={ scale }
      onClick={e => setActive(Number(!active))}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial
        attach="material"
        color={color}
      />
    </a.mesh>
  )
}




function Content(){
  const trigger1Ref = useRef();
  const trigger2Ref = useRef();
  const trigger3Ref = useRef();
  const trigger4Ref = useRef();

  const useOnScreen = useCallback((ref, rootMargin = "0px") => {
    try {
      // State and setter for storing whether element is visible
      const [isIntersecting, setIntersecting] = useState(false);
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Update our state when observer callback fires
            setIntersecting(entry.isIntersecting);
          },
          {
            rootMargin,
          }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
          observer.unobserve(ref.current);
        };
      }, []); // Empty array ensures that effect is only run on mount and unmount
      return isIntersecting;
    } catch (error) {
      console.log(error)
      return false;
    }
  }, []);



  const onScreen1 = useOnScreen(trigger1Ref, "-80px");
  const onScreen2 = useOnScreen(trigger2Ref, "-80px");
  const onScreen3 = useOnScreen(trigger3Ref);
  const onScreen4 = useOnScreen(trigger4Ref);

  const lookingSection = useCallback(() => {
    if(onScreen1){
      return 1
    }
    else if(onScreen2 && !onScreen1){
      return 2
    }
    else if(onScreen3 && !onScreen2){
      return 3
    }
    else if(onScreen4 && !onScreen3){
      return 4
    }
    else{
      return 0
    }

    
  }, [onScreen1, onScreen2, onScreen3, onScreen4])()

  console.log(lookingSection)

  return(
    <>
      <div style={{margin: 0, padding: 0}} ref={trigger1Ref}>
        <FirstPart />
      </div>
      <div style={{margin: 0, padding: 0}} ref={trigger2Ref}>
        <Section >
          <Card
            title={"Projects"}
          >
            <Projects />
          </Card>
          <Card
          
            title={"Skills"}
          >
            <h2 >
              AAAA
            </h2>
          </Card>
        </Section>
      </div>
      <div style={{margin: 0, padding: 0}} ref={trigger3Ref}>
        <Section >
          <Card
            title={"About"}
          >
            <h2>
              About
            </h2>
          </Card>
        </Section>
      </div>
      <div style={{margin: 0, padding: 0}} ref={trigger4Ref} > 
        <Contact />
      </div>
    </>
  );
}



const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ((ev.clientX * window.innerWidth /2)-(window.innerWidth /2)) / 200 /2, y: (ev.clientY * window.innerHeight) / 100 /2 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    };
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
    //   camera.rotation.y = mousePosition.x / 5000 - mousePosition.x/2/ 5000 + 50
    // })

    return useFrame(() => {
      camera.position.lerp(vec.set( mouse.x * 20, mouse.y, camera.position.z), 0.2)
      camera.rotation.y = mouse.x / 5
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

// usar spline no lugar do atual 3d


function Controls() {
  const { gl, camera } = useThree()


  const [cameraStatePosition, setCameraStatePosition] = useState(0);


  const { spring } = useSpring({
    spring: cameraStatePosition,
    config: { mass: 5, tension:400, friction:50, precision: 0.0001}
  })
  
  const scale = spring.to([0, 1] , [ [ 0 ,0 ,0 ], [ 0 ,25 ,5 ] ])

  // camera.position = scale;

  return <OrbitControls  target={[0,0,0]} args={[camera, gl.domElement]} />
}


function MoveOnScroll(  ) {

  // const [globalState, setGlobalState] = useContext(Context);

  // console.log(globalState)

  // useLayoutEffect(() => console.log(window.pageYOffset), [])
  
  const { camera } = useThree()
  const vec = new THREE.Vector3()
  
  
  return useFrame(() => camera.position.lerp(vec.set(1, 1, 1 + window.pageYOffset/30), 0.5) )
  
}

function Bg(){

  

  const deg2rad = degrees => degrees * (Math.PI / 180);
  

  const cameraConfig = { 
    position: [ 0, 0 , 0 ],
  }


  return(
    <Canvas className="canvas" camera={cameraConfig}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 40]} intensity={0.5} />
      {/* <pointLight position={[0, -29, 3]} /> */}
      <Suspense fallback={null}>
        <mesh position={[0, -29, 3]} scale={[10, 10, 10]}>
          <Model/>
        </mesh>
        <Box position={[25, -2, 2]} />
      </Suspense>
      <MoveOnScroll/>
      {/* <Rig/> */}
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.1} bokehScale={1} height={480} /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
        <Noise opacity={0.02} />
        {/* <Vignette eskil={false} offset={0.1} darkness={1} /> */}
      </EffectComposer>
      {/* <Controls/> */}
    </Canvas>
  );
}
const Boxes = () => {

  

  return (
    <GlobalStates>
      <BaseLayout 
      content={ <Content /> }
      bg={ <Bg/> }
      />
    </GlobalStates>
  )
}


export default Boxes

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF,OrbitControls } from "@react-three/drei";


const Content3D=()=>{

  
   const model = useGLTF("../public/Model/bow.gltf");
    return(
        <div className="content">  
        <Canvas>
            <OrbitControls enableRotate/>
            <mesh>
                <primitive object={model.scene} directionalLight intensity ={10} rotation={[0,0,0]} scale={0.004}/>
            </mesh>
        </Canvas>
         
        </div>
    )
}

export default Content3D;
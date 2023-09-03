import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF,OrbitControls } from "@react-three/drei";


const Content3D=()=>{

  
   const model = useGLTF("./Model/penguin.gltf");
    return(
        <div className="content">  
        <Canvas>
            <OrbitControls enableRotate/>
            <mesh>
                <primitive object={model.scene} scale={0.004}/>
            </mesh>
        </Canvas>
         
        </div>
    )
}

export default Content3D;
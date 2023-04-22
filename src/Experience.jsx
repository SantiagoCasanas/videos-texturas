import { OrbitControls, Box } from '@react-three/drei'
import { useVideoTexture } from "@react-three/drei";
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import WallImage from './WallImage'

export default function Experience() {
    const directionalLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)

    function WallVideo() {
        const width = 8;
        const height = 8;
        const depth = 0.1;
        const texture = useVideoTexture("/static/video.mp4")

        return (
            <Box args={[width, height, depth]}>
                <meshStandardMaterial map={texture}/>
            </Box>
        );
    }

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -6]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {<mesh position-z={0} position-y={ 1.5 } position-x={ 4 }  rotation-y={4.71} >
            <WallVideo />
        </mesh>}

        <WallImage/>
        <Floor/>
        
        
    </>
}
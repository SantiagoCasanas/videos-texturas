import { useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useRef, useEffect, useState } from "react";

export default function WallVideo() {
  const [pause, setPause] = useState(false);

  const props = {
    unsuspend: "canplay",
    muted: true,
    loop: true,
    start: pause,
  };

  const videoTexture = useVideoTexture("./static/video.mp4", props);

  const playVideo = () => {
    setPause(true);
  };


    return (
        <mesh receiveShadow={true} position-z={0} position-y={ 1.5 } position-x={ 4 } rotation-x={3.14} rotation-y={4.71} onClick={playVideo}>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial map={videoTexture} side={DoubleSide} />
        </mesh>
    )
}
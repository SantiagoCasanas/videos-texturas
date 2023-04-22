import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";
import { useState } from "react";

export default function WallImage() {

    const PATH = "/static/photos/"
    const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"]

    const [textureUrl, setTextureUrl] = useState(chooseImagen(photos));



    function chooseImagen(options) {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
      }

    const onHandle = () => {
        setTextureUrl(chooseImagen(photos))
    } 

    const props = useTexture({
        map: PATH + textureUrl
    })

    return (
        <mesh receiveShadow={true} rotation-z={9.426} position-z={4} position-y={ 1.5 } rotation-x={3.14} side={DoubleSide} onPointerEnter={onHandle}>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial {...props} />
        </mesh>
    )
}
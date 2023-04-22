export default function Floor() {
    return (
        <mesh receiveShadow={true} position-y={ - 2.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial color="gray" />
        </mesh>
    )
}

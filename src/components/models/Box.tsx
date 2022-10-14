import { useRef } from 'react'
import { DoubleSide, Mesh } from 'three'

export default function Box({
    color = '#777777',
    args = [15, 15, 100],
    ...props
}: any) {
    const boxRef = useRef<Mesh>(null!)
    return (
        <mesh {...props} ref={boxRef} castShadow>
            <boxGeometry attach="geometry" args={args} />
            <meshStandardMaterial attach="material" color={color} wireframe={false} side={DoubleSide} />
        </mesh>
    )
}

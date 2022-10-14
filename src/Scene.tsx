import { Loader, OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Home from './components/Home/Home';

export default function Scene() {
    return (
        <>
            <Canvas
                orthographic
                camera={{ position: [0, 120, 350], fov: 15 }}
            >
                <ambientLight />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Preload />
                    <Home />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}

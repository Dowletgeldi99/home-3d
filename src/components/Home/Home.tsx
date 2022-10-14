import { IWallToDrawPos } from '../../types/wals';
import Box from '../models/Box';
import wallsToDraw from '../../hooks/getWallsToDraw'
import stockData from '../../mock/mock.json'
import { WALL_HEIGHT, WALL_THICKNESS } from '../../constants/walls';

export default function Home() {
    const getSizes = (pos: IWallToDrawPos) => {
        return pos.start.x === pos.end.x ? 
            [WALL_THICKNESS, pos.end.y - pos.start.y, WALL_HEIGHT] :
            [pos.end.x - pos.start.x, WALL_THICKNESS, WALL_HEIGHT]
    }

    const getPosition = (pos: IWallToDrawPos) => {
        return pos.start.x === pos.end.x ?
            [pos.start.x , pos.start.y + (pos.end.y - pos.start.y) / 2, 0] :
            [pos.start.x + (pos.end.x - pos.start.x) / 2, pos.start.y, 0]
    }

    return (
    <>
        <group>
            {stockData.corners.map(corner => (
                <Box
                    key={corner.id}
                    position={[corner.x, corner.y, 0]}
                />
            ))}

            {wallsToDraw.map(wall => (
                <Box
                    key={wall.id}
                    position={getPosition(wall.pos)}
                    args={getSizes(wall.pos)}
                />
            ))}
        </group>
    </>
  )
}

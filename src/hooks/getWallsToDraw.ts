import { IWallToDraw } from './../types/wals';
import stockData from '../mock/mock.json'

const wallsToDraw: IWallToDraw[] = []

stockData.corners.map(corner => {
    corner.wallStarts.forEach(cornerWallStart => {
        stockData.walls.forEach(wall => {
            if (wall.id === cornerWallStart.id) {
                wallsToDraw.push({
                    pos: {
                        start: {x: corner.x, y: corner.y},
                        end: {x: 0, y: 0},
                    },
                    ...wall
                })
            }
        })
    })
})

stockData.corners.map(corner => {
    corner.wallEnds.forEach(cornerWallEnd => {
        stockData.walls.forEach(wall => {
            if (wall.id === cornerWallEnd.id) {
                const wallFind = wallsToDraw.find(el => el.id === wall.id)
                if (wallFind) {
                    wallFind.pos = {
                        ...wallFind.pos,
                        //@ts-ignore
                        end: {x: corner.x, y: corner.y},
                    }
                } else {
                    wallsToDraw.push({
                        pos: {
                            start: {x: 0, y: 0},
                            end: {x: corner.x, y: corner.y},
                        },
                        ...wall
                    })
                }
            }
        })
    })
})

export default wallsToDraw
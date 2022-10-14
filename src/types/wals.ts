export interface IWallToDrawPos {
    start: {x: number, y: number}
    end: {x: number, y: number}
}

export interface IWallToDraw {
    pos: IWallToDrawPos
    id: string
    thickness?: number
    bearing?: number
    height?: null | number
    lengthFormatted?: string
    backEdge?: null | number
    orphan?: boolean
    hovered?: boolean
}
import { createBoard, createMoves } from "./board"

// The graph
export const adjecencyList = new Map()

// Add node
const addNode = (square) => {
    adjecencyList.set(square, [])
}

// Add edge, undirected
const addEdge = (origin, destination) => {
    adjecencyList.get(origin).push(destination)
    adjecencyList.get(destination).push(origin)
}

// Creating Graph

const squares = createBoard()
const moves = createMoves()

squares.forEach(addNode)
moves.forEach(move => addEdge(...move))

export const logGraph = ()=>console.log(adjecencyList)
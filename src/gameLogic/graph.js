import { createBoard, createMoves } from "./board"

// The graph
export const stringAdjecencyList = new Map()

// Add node
const addNode = (square) => {
    stringAdjecencyList.set(JSON.stringify(square), [])
}

// Add edge, undirected
const addEdge = (origin, destination) => {
    stringAdjecencyList.get(JSON.stringify(origin)).push(JSON.stringify(destination))
    // stringAdjecencyList.get(JSON.stringify(destination)).push(JSON.stringify(origin))
}

// Creating Graph

const squares = createBoard()
const moves = createMoves()

squares.forEach(move => addNode(move))
moves.forEach(move => addEdge(move[0], move[1]))

export const logGraph = () => console.log(stringAdjecencyList)
import { createBoard, createMoves } from "./board"

// The graph
export const adjecencyList = new Map()

// Add node
const addNode = (square) => {
    adjecencyList.set(square, [])
}

// Add edge, undirected
const addEdge = (origin, destination) => {
    adjecencyList.get([7, 73]).push(destination)
    // adjecencyList.get(destination).push(origin)
    console.log(origin)
}

// Creating Graph

const squares = createBoard()
const moves = createMoves()

squares.forEach(move => addNode(move))
moves.forEach(move => addEdge(move[0], move[1]))

export const logGraph = () => console.log(adjecencyList)
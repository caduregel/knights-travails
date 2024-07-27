import { stringAdjecencyList } from "./graph";

export const breathFirstSearch = (start, end) => {

    const visited = new Set()

    const queue = [start]
    
    let count = 0

    while (queue.length > 0) {
        const square = queue.shift();

        const moves = stringAdjecencyList.get(square)

        for (const move of moves) {

            if (move === end) {
                return count
            }

            if (!visited.has(move)) {
                visited.add(move)
                queue.push(move)
                count = count + 1
            }
        }
    }
}
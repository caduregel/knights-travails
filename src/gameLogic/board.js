// Vertexes/Nodes
export const createBoard = () => {
    const chessBoardCoordinates = [];

    // Loop through each row (1 to 8)
    for (let row = 0; row < 8; row++) {
        // Loop through each column (1 to 8)
        for (let col = 0; col < 8; col++) {
            // Add the coordinate as an array [row, col]
            chessBoardCoordinates.push([row, col]);
        }
    }

    return chessBoardCoordinates
}


// Function to check if a position is within the bounds of the chessboard
function isValidPosition(row, col) {
    return row >= 0 && row <= 7 && col >= 0 && col <= 7;
}

// Edges/possible moves
export const createMoves = () => {
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // Array to hold the edges of the graph
    const knightMovesGraph = [];

    // Loop through each square on the chessboard
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            // Loop through each possible knight move
            for (const move of knightMoves) {
                const newRow = row + move[0];
                const newCol = col + move[1];

                // Check if the new position is valid
                if (isValidPosition(newRow, newCol)) {
                    // Add the edge to the graph
                    knightMovesGraph.push([[row, col], [newRow, newCol]]);
                }
            }
        }
    }

    return knightMovesGraph
}

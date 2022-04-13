const wordSearch = (letters, word) => { 

    // checks if letters matrix is empty
    if (letters.length === 0) return false;
    
    // joins letters horizonially
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    // joins vertical letters by first transposing the letters matrix
    const transposedGrid = letters[0].map((_, colIndex) => letters.map(row => row[colIndex]));
    const verticalJoin = transposedGrid.map(ls => ls.join(''))
    
    // checks for a word match both horizontally and vertically
    for (x of horizontalJoin) {
        if (x.includes(word)) return true;
    }
    for (y of verticalJoin) {
        if (y.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch;
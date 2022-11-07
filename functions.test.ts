const {shuffleArray} = require('./utils')

let result = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray return a array', () => {
        expect(Array.isArray(result)).toBeTruthy()
    })
    test('shuffleArray return a array', () => {
            expect(result).toHaveLength(4)
    })

    
    test('shuffleArray return a array', () => {
        expect(result).toEqual(result)
    })

    
})
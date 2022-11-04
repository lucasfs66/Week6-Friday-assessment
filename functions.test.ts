const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray return a array', () => {
        expect(shuffleArray([1, 2, 3, 4])).toBe(Array)
    })
    test('shuffleArray return a array', () => {
            expect(shuffleArray([1, 2, 3, 4])).toHaveLength(4)
    })

    
    test('shuffleArray return a array', () => {
        expect(shuffleArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    })

    
})
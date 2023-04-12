import { Bowling } from '../src/Bowling'

let bowling: Bowling = new Bowling()

beforeEach(() => {
    bowling = new Bowling()
})

describe('Bowling game', () => {
    test('should score 0 if no pins being hit', () => {
        playMany(20, 0)
        expect(bowling.score()).toBe(0)
    })

    test('should score 40 for all twos game', () => {
        playMany(20, 2)
        expect(bowling.score()).toBe(40)
    })

    test('should score 16 for a spare followed by a 3 ball', () => {
        rollSpare()
        bowling.play(3)
        expect(bowling.score()).toBe(16)
    })

    test('should score 26 for a strike followed by a 5 and a 3 ball', () => {
        rollStrike()
        bowling.play(5)
        bowling.play(3)
        playMany(16, 0)
        expect(bowling.score()).toBe(26)
    })

    test('should score 300 for all pins being hit in every frame', () => {
        playMany(12, 10)
        expect(bowling.score()).toBe(300)
    })

    function rollStrike(): void {
        bowling.play(10)
    }

    function rollSpare(): void {
        bowling.play(4)
        bowling.play(6)
    }

    function playMany(n: number, pins: number): void {
        for (let i = 0; i < n; i++) {
            bowling.play(pins)
        }
    }
})

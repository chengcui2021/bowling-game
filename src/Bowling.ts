export class Bowling {
    //initializing all the rounds during 10 frames
    private rounds: number[] = Array(21).fill(0)
    private currentPlay: number = 0

    score(): number {
        let score = 0
        //initialze round
        let round = 0
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(round)) {
                score += 10 + this.strikeScore(round)
                round++
            } else if (this.isSpare(round)) {
                score += 10 + this.spareScore(round)
                round += 2
            } else {
                score += this.totalBallsInFrame(round)
                round += 2
            }
        }
        return score
    }

    private totalBallsInFrame(round: number): number {
        return this.rounds[round] + this.rounds[round + 1]
    }

    //caculate the strike score
    private strikeScore(round: number): number {
        return this.rounds[round + 1] +
            this.rounds[round + 2]
    }

    //caculate the spare score
    private spareScore(round: number): number {
        return this.rounds[round + 2]
    }

    private isStrike(round: number): boolean {
        return this.rounds[round] === 10
    }

    private isSpare(round: number): boolean {
        return this.rounds[round] + this.rounds[round + 1] === 10
    }

    play(pins: number): void {
        this.rounds[this.currentPlay++] = pins
    }
}
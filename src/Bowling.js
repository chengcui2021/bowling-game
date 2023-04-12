"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bowling = void 0;
class Bowling {
    constructor() {
        //initializing all the rounds during 10 frames
        this.rounds = Array(21).fill(0);
        this.currentPlay = 0;
    }
    score() {
        let score = 0;
        //initialze round
        let round = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(round)) {
                score += 10 + this.strikeScore(round);
                round++;
            }
            else if (this.isSpare(round)) {
                score += 10 + this.spareScore(round);
                round += 2;
            }
            else {
                score += this.totalBallsInFrame(round);
                round += 2;
            }
        }
        return score;
    }
    totalBallsInFrame(round) {
        return this.rounds[round] + this.rounds[round + 1];
    }
    //caculate the strike score
    strikeScore(round) {
        return this.rounds[round + 1] +
            this.rounds[round + 2];
    }
    //caculate the spare score
    spareScore(round) {
        return this.rounds[round + 2];
    }
    isStrike(round) {
        return this.rounds[round] === 10;
    }
    isSpare(round) {
        return this.rounds[round] + this.rounds[round + 1] === 10;
    }
    play(pins) {
        this.rounds[this.currentPlay++] = pins;
    }
}
exports.Bowling = Bowling;

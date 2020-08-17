class Timer {
    constructor(durationInput, startButton, pauseButton, cb) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (cb) {
            this.onStart = cb.onStart;
            this.onTick = cb.onTick;
            this.onComplete = cb.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        if (this.onStart) this.onStart(this.timeRemaining);
        this.tick();
        this.intervalId = setInterval(this.tick, 20);
    };

    pause = () => clearInterval(this.intervalId);

    tick = () => {
        if (this.onTick) this.onTick(this.timeRemaining);
        if (this.timeRemaining <= 0) {
            this.pause();
            return this.onComplete ? this.onComplete() : -1;
        }
        const timeRemaining = this.timeRemaining;
        this.timeRemaining = timeRemaining - 0.02;
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}

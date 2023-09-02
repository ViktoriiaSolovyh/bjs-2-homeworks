class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (
			!(typeof callback === "function") ||
			time.length !== 5 ||
			time[2] !== ":"
		) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		if (this.alarmCollection.length > 0) {
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === time) {
					console.warn("Уже присутствует звонок на это же время");
				}
			});
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(
			(alarm) => alarm.time !== time
		);
	}

	getCurrentFormattedTime() {
		return new Date().toTimeString().slice(0, 5);
	}

	start() {
		if (!this.intervalId) {
			this.intervalId = setInterval(() => {
				let currentTime = this.getCurrentFormattedTime();
				this.alarmCollection.forEach((alarm) => {
					if (alarm.time === currentTime && alarm.canCall) {
						alarm.canCall = false;
						alarm.callback();
					}
				});
			}, 1000);
		}
	}

	stop() {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}
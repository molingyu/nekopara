class InterpolatorBase {

	constructor(start, end, samples, type) {
		this.index = 1
		switch(type) {
			case 0:
				this.update = this.in
			case 1:
				this.update = this.out
		}
	}

	current() {
		if (index > samples) {
			throw new Error()
		}
		return this.update()
	}

	in() { }

	out() { }

	inOut() { }

	outIn() { }

	all() {
		let list = Array.new(samples)
		for (let index = 1; index <= samples; index++) {
			list.push(this.update(start, end, samples, index))
		}
	}

}

export default Interpolator
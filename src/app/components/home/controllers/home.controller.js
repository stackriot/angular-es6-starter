class HomeCtrl {

	constructor() {
		this.thingInput = null;
		this.things = [];
		console.log('Starter Log:', 'Hello from HomeCtrl');
	}

	addThing() {
		if( this.thingInput && this.thingInput != '' ) {
			this.things.push(this.thingInput);
			this.thingInput = '';
		}
	}

	removeThing(index) {
		return this.things.splice(index, 1);
	}

}

export default HomeCtrl;

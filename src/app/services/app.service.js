class MainService {

  constructor() {
    this.names = ['Filippo', 'Matthew', 'Sara', 'Jhonn', 'Rambo', 'Lara']
  }

  getName() {
    return this.names[ Math.floor(Math.random() * this.names.length) ]
  }

}

export default MainService;

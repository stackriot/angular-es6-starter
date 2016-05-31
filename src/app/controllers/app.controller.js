class MainCtrl {

  constructor(MainService) {
    this.title = 'Angular ES6';
    this.description = 'start here your Angular ES6 project';
    // call service
    MainService.doSomething();
  }

}

export default MainCtrl;

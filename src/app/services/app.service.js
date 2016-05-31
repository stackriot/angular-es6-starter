class MainService {

  constructor($timeout) {
    this.$timeout = $timeout;
  }

  doSomething() {
    this.$timeout(function () {
      console.log('Hi, from the service!');
    }, 500)
  }

}

export default MainService;

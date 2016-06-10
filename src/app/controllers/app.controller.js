class MainCtrl {

    constructor($route) {
        this.title = 'Angular ES6';
        this.description = 'start here your Angular ES6 project';
        this.routes = getRoutes($route);
    }

}

function getRoutes($route) {
    let arr = [];
    angular.forEach($route.routes, function (route, val) {
        if(route.title) { route.url = '#' + route.originalPath; arr.push(route); }
    })
    return arr;
}

export default MainCtrl;

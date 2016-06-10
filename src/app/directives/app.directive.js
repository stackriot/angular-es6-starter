MainDirective.$inject = ['$interval', 'MainService']

export default function MainDirective($interval,MainService) {

	return {
		restrict: 'E',
		scope: true,
		template: '<p><strong>Hi, {{name}}</strong>. Nice to see you.</p>',
		link
	}

	function link(scope, elem, attr) {

		var interval;

		scope.name = MainService.getName();
		
		interval = $interval( () => scope.name = MainService.getName(), 1500 );

		scope.$on( '$destroy', () => $interval.cancel(interval) );

	}

}

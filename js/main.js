( function () {
	'use strict';

	function init () {
		alert( 'oop' );
	}

	window.addEventListener( 'load', function () {
		if ( document.readyState === 'complete' ) {
			init();
		}
	} );

} )();

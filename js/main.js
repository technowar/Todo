( function () {
	'use strict';

	function init () {
		var todo  = document.getElementById( 'form' );
		var lists = document.getElementById( 'todo-lists' );

		todo.addEventListener( 'submit', todoSubmit );

		function todoSubmit ( e ) {
			e.preventDefault();

			var todo     = document.getElementById( 'todo' );
			var liTodo   = document.createElement( 'li' );

			liTodo.innerHTML = '<input class="select" type="checkbox"><label>' + todo.value;
			lists.appendChild( liTodo );

			var liChecker = liTodo.querySelector( '.select' );
			liChecker.addEventListener( 'click', todoChecker.bind( liChecker ) );

			todo.value = '';
		}

		function todoChecker ( e ) {
			if ( this.checked ) {
				this.nextSibling.classList.add( 'checked' );
			} else {
				this.nextSibling.classList.remove( 'checked' );
			}
		}
	}

	window.addEventListener( 'load', function () {
		if ( document.readyState === 'complete' ) {
			init();
		}
	} );

} )();

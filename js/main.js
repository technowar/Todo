( function () {
    'use strict';

    function init () {
        var todo = document.getElementById( 'form' );
        
        todo.onsubmit = function ( e ) {
            e.preventDefault();

            var self = this;

            if ( document.getElementById( 'todo' ).value !== '' ) {
                document.getElementById( 'todo-lists' ).innerHTML += '<li>' + '<input class=checkbox type=checkbox>' + self.todo.value + '</li>';
                console.log( document.getElementById( 'todo-lists' ).querySelectorAll( 'li' ) );
            }

            document.getElementById( 'todo' ).value = '';
        };
    }

    window.onload = function () {
        if ( document.readyState === 'complete' ) {
            init();
        }
    }

} )();

( function () {
    'use strict';

    function init () {
        var todo = document.getElementById( 'form' );
        
        todo.onsubmit = function ( e ) {
            e.preventDefault();

            var self = this;

            document.getElementById( 'todo-lists' ).innerHTML += '<li>' + self.todo.value + '</li>';
        };
    }

    window.onload = function () {
        if ( document.readyState === 'complete' ) {
            init();
        }
    }

} )();

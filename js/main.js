( function () {
    'use strict';

    function init () {
        var todo = document.getElementById( 'form' );
        
        todo.addEventListener( 'submit', function ( e ) {
            e.preventDefault();

            var self = this;

            if ( document.getElementById( 'todo' ).value !== '' ) {
                document.getElementById( 'todo-lists' ).innerHTML += '<li>' + '<input type=checkbox>' + self.todo.value + '</li>';

                var lists = document.getElementById( 'todo-lists' ).querySelectorAll( 'input' );

                for ( var i = 0; i < lists.length; i ++ ) {
                    lists[ i ].addEventListener( 'click', function( evt ) {
                        if( this.checked ) {
                            this.classList.add( 'checked' );
                        } else {
                            this.classList.remove( 'checked' );
                        }
                    } );
                }
            }

            document.getElementById( 'todo' ).value = '';
        } );
    }

    window.onload = function () {
        if ( document.readyState === 'complete' ) {
            init();
        }
    }

} )();

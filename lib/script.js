'use strict';

/**
 * Created by lowellbander on 6/1/16.
 */

var TAG = Piece.getTags();

var context = document.querySelector('#content');
var scene = new Scene({
    pieces: Piece.getPieces(),
    context: context
});

scene.render(TAG.TOP);

function removePieces() {
    var selectedPiece = document.getElementsByClassName('Piece');
    var content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

var htmlStyles = window.getComputedStyle(document.body);
var headerHeight = htmlStyles.getPropertyValue('--header-height');
var navHeight = htmlStyles.getPropertyValue('--nav-height');
var footerHeight = htmlStyles.getPropertyValue('--footer-height');

document.getElementById('content').style.height = window.innerHeight - parseInt(headerHeight) - parseInt(navHeight) - parseInt(footerHeight) + "px";

//document.getElementById('content').style.height = window.innerHeight - 365 + "px";

//Header.render();

//     Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown-content')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
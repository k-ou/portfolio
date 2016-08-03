'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by lowellbander on 6/1/16.
 */

var Scene = function () {
    function Scene(_ref) {
        var pieces = _ref.pieces;
        var context = _ref.context;

        _classCallCheck(this, Scene);

        this.pieces = pieces;
        this.context = context;
    }

    _createClass(Scene, [{
        key: 'toggleSelectedPiece',
        value: function toggleSelectedPiece(piece) {
            var selectedPiece = document.getElementById('detail');
            var background = document.getElementById('detailBox');
            if (selectedPiece) {
                background.removeChild(selectedPiece);
            } else {
                var detail = Detail.render(piece);
                detail.onclick = this.toggleSelectedPiece;
                detail.style.height = window.innerHeight + 'px';
                //            background.insertBefore(detail, this.context);
                background.appendChild(detail);
            }
        }

        //    Renders art pieces based on tag selected (i.e. illustrator, traditional)

    }, {
        key: 'render',
        value: function render(tag) {
            var _this = this;

            removePieces();
            if (tag === 'about') {
                this.about();
            }
            this.pieces.filter(function (_) {
                return tag === undefined || _.tags.includes(tag);
            }).forEach(function (piece) {
                var element = piece.render();
                element.onclick = _this.toggleSelectedPiece.bind(_this, piece);
                _this.context.appendChild(element);
            });
        }

        //     Fills in "About" section.

    }, {
        key: 'about',
        value: function about() {
            var div = document.createElement('div');
            div.id = "introdiv";
            this.context.appendChild(div);

            var p1 = document.createElement('p');
            p1.className = 'about';
            p1.innerHTML = 'Hi, I\'m Kelly Ou.';

            var p2 = document.createElement('p');
            p2.className = 'about';
            p2.innerHTML = 'Frequent visitor of small coffee shops and bookstores, as well as the large expanse of the great outdoors.';

            var p3 = document.createElement('p');
            p3.className = 'about';
            p3.innerHTML = 'I devour carbs, make illustrations, exercise early in the morning, and converse late into the night. I enjoy making conversation with and learning from both friends and strangers alike.';

            var p4 = document.createElement('p');
            p4.className = 'about';
            p4.innerHTML = 'I like making art, and I love making people happy.';

            var p5 = document.createElement('p');
            p5.className = 'about';
            p5.innerHTML = 'From small town Fishers, IN, to beautiful San Diego, to bustling LA, to invigorating Seattle.';

            var p6 = document.createElement('p');
            p6.className = 'about';
            p6.innerHTML = 'I earned a BS in Mathematics of Computation from UCLA.';

            var p7 = document.createElement('p');
            p7.className = 'about';
            p7.innerHTML = 'I\'m looking to expand my horizons, step into the unknown, and embrace the fear that holds me back.';

            var carbcat = document.createElement('img');
            carbcat.src = 'web_photos/hiker.jpg';
            carbcat.style.width = '500px';

            var table = document.createElement('table');
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.appendChild(p1);
            td1.appendChild(p2);
            td1.appendChild(p3);
            td1.appendChild(p4);
            td1.appendChild(p5);
            td1.appendChild(p6);
            td1.appendChild(p7);
            td2.appendChild(carbcat);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            div.appendChild(table);

            var description = document.createElement('p');
            description.innerHTML = 'Backpacking in Yosemite National Park!';
            td2.appendChild(description);
        }

        //     Toggles view of portfolio dropdown menu.

    }, {
        key: 'dropdown',
        value: function dropdown() {
            document.getElementById("mydrop").classList.toggle("show");
        }
    }]);

    return Scene;
}();

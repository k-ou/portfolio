'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
    function Header() {
        _classCallCheck(this, Header);
    }

    _createClass(Header, null, [{
        key: 'render',
        value: function render() {
            var headerTemplate = '<div id="header" class="row">\n        <div id="name" class="col-md-5">\n            <h1>Kelly Ou </h1>\n        </div>\n        <div id="logo" class="col-md-2">\n            <img id="logo" src="photos/logo_k.png" />\n        </div>\n        <div id="title" class="col-md-5">\n            <h1> Portfolio</h1>\n        </div>\n        </div>';

            var header = new DOMParser().parseFromString(headerTemplate, 'text/xml').firstChild;

            document.getElementsByTagName('body')[0].replaceChild(header, document.getElementById('header'));
        }
    }]);

    return Header;
}();
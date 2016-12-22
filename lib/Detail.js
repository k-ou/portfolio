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

var Detail = function () {
    function Detail() {
        _classCallCheck(this, Detail);
    }

    _createClass(Detail, null, [{
        key: 'render',
        value: function render(piece) {
            var detail = document.createElement('div');
            detail.id = 'detail';
            detail.style.position = 'fixed';
            detail.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            detail.style.width = '100%';
            detail.style.height = '100%';
            detail.style.paddingBottom = '0px';

            var img = document.createElement('img');
            img.setAttribute('src', 'photos_detail/' + piece.photoURL);
            img.style.width = 'auto';
            img.style.maxWidth = '100%';
            img.style.display = 'block';
            img.style.maxHeight = '80%';
            img.style.marginTop = '40px';
            img.style.marginBottom = '30px';
            img.style.marginLeft = 'auto';
            img.style.marginRight = 'auto';
            detail.appendChild(img);

            var p = document.createElement('p');
            p.innerHTML = piece.description;
            p.style.color = 'white';
            p.style.position = 'relative';
            p.style.margin = '0 auto';
            p.style.marginBottom = '0';
            p.style.textAlign = 'center';
            p.style.width = '100%';
            p.style.maxWidth = '60%';
            p.style.fontFamily = 'Lato';
            p.style.fontSize = '18px';
            p.style.fontWeight = '300';
            detail.appendChild(p);

            return detail;
        }
    }]);

    return Detail;
}();

class Header {
    static render() {
        var headerTemplate =
            `<div id="header" class="row">
        <div id="name" class="col-md-5">
            <h1>Kelly Ou </h1>
        </div>
        <div id="logo" class="col-md-2">
            <img id="logo" src="photos/logo_k.png" />
        </div>
        <div id="title" class="col-md-5">
            <h1> Portfolio</h1>
        </div>
        </div>`;

        var header = (new DOMParser())
            .parseFromString(headerTemplate, 'text/xml')
            .firstChild;

        document.getElementsByTagName('body')[0]
            .replaceChild(header, document.getElementById('header'));
    }
}

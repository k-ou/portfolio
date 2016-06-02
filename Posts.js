class Piece {
    constructor({
        title, body, photoURL
    }) {
        // TODO: validate that arguments aren't undefined
        this.title = title;
        this.body = body;
        this.photoURL = photoURL;
    }

    render() {
        const template = `
            <div class="post">
                <h1>${this.title}</h1>
                <img src=${this.photoURL} />
            </div>
        `;
        const piece = document.createElement('div');
        piece.innerHTML = template;
        return piece;
    }
}

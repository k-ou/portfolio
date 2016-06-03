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
            <h1>${this.title}</h1>
            <img src=${this.photoURL} />
        `;
        const piece = document.createElement('li');
        piece.className = 'post';
        piece.innerHTML = template;
        return piece;
    }
}

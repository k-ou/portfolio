class Piece {
    constructor({
        title, description, photoURL
    }) {
        // TODO: validate that arguments aren't undefined
        this.title = title;
        this.description = description;
        this.photoURL = photoURL;
    }

    render() {
        var directory = 'photos/';
        const template = `
            <h4>${this.title}</h4>
            <img src=${directory + this.photoURL} />
        `;
        const piece = document.createElement('li');
        piece.className = 'post';
        piece.innerHTML = template;
        var img = piece.getElementsByTagName('img')[0];

        img.onload = () => {
            if (img.height > img.width) {
                img.style.height = 'auto';
                img.style.width = 'var(--post-width)';
            } else {
                img.style.height = 'var(--post-width)';
                img.style.width = 'auto';
            }
        }

        return piece;
    }
}

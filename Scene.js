/**
 * Created by lowellbander on 6/1/16.
 */

class Scene {
    constructor({
        pieces, context
    }) {
        this.pieces = pieces;
        this.context = context;
    }

    toggleSelectedPiece(piece) {
        const selectedPiece = document.getElementById('detail');
        const background = document.getElementById('detailBox');
        if (selectedPiece) {
            background.removeChild(selectedPiece);
        } else {
            const detail = Detail.render(piece);
            detail.onclick = this.toggleSelectedPiece;
            detail.style.height = window.innerHeight + 'px';
            //            background.insertBefore(detail, this.context);
            background.appendChild(detail)
        }
    }

    render() {
        this.pieces.forEach(piece => {
            const element = piece.render();
            element.onclick = this.toggleSelectedPiece.bind(this, piece);
            this.context.appendChild(element);
        });
    }
}

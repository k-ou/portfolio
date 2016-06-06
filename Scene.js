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

    //    Renders art pieces based on tag selected (i.e. illustrator, traditional)
    render(tag) {
        removePieces();
        if (tag === 'about') {
            this.about();
        }
        this.pieces
            .filter(_ => tag === undefined || _.tags.includes(tag))
            .forEach(piece => {
                const element = piece.render();
                element.onclick = this.toggleSelectedPiece.bind(this, piece);
                this.context.appendChild(element);
            });
    }

    //     Fills in "About" section.
    about() {
        var div = document.createElement('div');
        div.id = "introdiv";
        this.context.appendChild(div);

        var p = document.createElement('p');
        p.id = 'intro';
        p.innerHTML = 'HEY THERE. I recently graduated from UCLA (Class of \'16, what up) with a degree in mathematics of computation. Bascially, this means that I learned a lot of math and learned a bit of code.';
        div.appendChild(p);
    }

    //     Toggles view of portfolio dropdown menu.
    dropdown() {
        document.getElementById("mydrop").classList.toggle("show");
    }


}

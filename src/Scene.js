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

        var p1 = document.createElement('p');
        p1.className = 'about';
        p1.innerHTML = 'HEY THERE. I recently graduated from UCLA (Class of \'16, what up) with a degree in mathematics of computation. Bascially, this means that I learned a lot of math and learned a bit of code.';
        p1.innerHTML = 'Hello! My name is Kelly Ou. I\'m an avid hiker, and I love spending early mornings running and sunny afternoons with my nose buried in a book. Within my circle of family and friends, I\'ve also made a name for myself for my penchant for making fun and personal illustrations, and I\'ve come to see my artistic endeavors as something I\'d like to seriously pursue.';

        var p2 = document.createElement('p');
        p2.className = 'about';
        p2.innerHTML = 'I spent much of my childhood in Fishers, Indiana, but when I was 11, my family and I picked up our roots and moved to San Diego, CA, where I lived until starting school at UCLA. I graduated four months ago with a degree in Mathematics of Computation, and though I\'ve learned a lot of math these past four years, I\'ve also come to learn that it just isn\'t for me; so, I\'ve spent much of these past few months catching up on activities I truly enjoy, the most important of which is making art. In particular, I\'ve been experimenting with life drawing, graphic design, superheroes, and Adobe Illustrator.';

        var p3 = document.createElement('p');
        p3.className = 'about';
        p3.innerHTML = 'This portfolio is an attempt to compile and display many of my past works, as well as my more recent projects; while the number of pieces I\'ve collected and uploaded thus far has been modest, I\'m excited to continue updating the site with my current projects.';

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
    dropdown() {
        document.getElementById("mydrop").classList.toggle("show");
    }


}
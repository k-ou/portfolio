/**
 * Created by lowellbander on 6/2/16.
 */

class Detail {
    static render(piece) {
        const detail = document.createElement('div');
        detail.id = 'detail';
        detail.style.position = 'absolute';
        detail.style.backgroundColor = 'black';
        detail.style.border = '1px solid red';
        const h1 = document.createElement('h1');
        h1.innerHTML = piece.title;
        h1.style.color = 'white';
        detail.appendChild(h1);

        const p = document.createElement('p');
        p.innerHTML = piece.body;
        p.style.color = 'white';
        detail.appendChild(p);

        const img = document.createElement('img');
        img.setAttribute('src', piece.photoURL);
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        detail.appendChild(img);
        return detail;
    }
}

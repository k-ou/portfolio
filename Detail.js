/**
 * Created by lowellbander on 6/2/16.
 */

class Detail {
    static render(piece) {
        const detail = document.createElement('div');
        detail.id = 'detail';
        detail.style.position = 'fixed';
        detail.style.backgroundColor = 'black';
        detail.style.border = '1px solid red';
        detail.style.width = '100%';

        const p = document.createElement('p');
        p.innerHTML = piece.body;
        p.style.color = 'white';
        p.style.float = 'right';
        detail.appendChild(p);

        const img = document.createElement('img');
        img.setAttribute('src', piece.photoURL);
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        detail.appendChild(img);
        return detail;
    }
}

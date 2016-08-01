/**
 * Created by lowellbander on 6/2/16.
 */

class Detail {
    static render(piece) {
        const detail = document.createElement('div');
        detail.id = 'detail';
        detail.style.position = 'fixed';
        detail.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        detail.style.width = '100%';
        detail.style.height = '100%';
        detail.style.paddingBottom = '0px';

        const img = document.createElement('img');
        img.setAttribute('src', 'photos_detail/' + piece.photoURL);
        img.style.width = 'auto';
        img.style.maxWidth = '100%';
        img.style.display = 'block';
        img.style.maxHeight = '90%';
        img.style.marginTop = '20px';
        img.style.marginBottom = '60px';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
        detail.appendChild(img);

        const h4 = document.createElement('h4');
        h4.innerHTML = piece.description;
        h4.style.color = 'white';
        h4.style.textAlign = 'center';
        h4.style.width = '100%';
        h4.style.bottom = '0';
        h4.style.position = 'absolute';
        h4.style.fontFamily = 'Josefin Slab';
        detail.appendChild(h4);

        return detail;
    }
}

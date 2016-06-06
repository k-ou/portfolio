class Piece {
    constructor({
        title, description, photoURL, tags
    }) {
        // TODO: validate that arguments aren't undefined
        this.title = title;
        this.description = description;
        this.photoURL = photoURL;
        this.tags = tags;
    }

    static getTags() {
        return {
            TOP: 'TOP',
            ILLUSTRATOR: 'ILLUSTRATOR',
            TRADITIONAL: 'TRADITIONAL',
        };
    }

    isTop() {
        return this.tags.includes(Piece.getTags().TOP);
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

    // TODO: add comic book illustrator logos & heros
    // TODO: add snapchat filters

    static getPieces() {
        return [
            new Piece({
                title: 'Charcoal_Still_01',
                description: 'My first time using charcoal. Subject is an amalgamation of still life objects.',
                photoURL: 'Charcoal_Still_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Charcoal_Still_02',
                description: 'a description for Charcoal_Still_02',
                photoURL: 'Charcoal_Still_02.jpg',
                tags: [TAG.TRADITIONAL, TAG.TOP],
            }),
            new Piece({
                title: 'Concept_CarbCat_01',
                description: 'a description for Concept_CarbCat_01',
                photoURL: 'Concept_CarbCat_01.jpg',
                tags: [TAG.TRADITIONAL, TAG.TOP],
            }),
            new Piece({
                title: 'Concept_Heroes_01',
                description: 'Conception of two heroes based on myself and a companion. First time using a bamboo pen and black India ink.',
                photoURL: 'Concept_Heroes_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Contour_Bike',
                description: 'a description for Contour_Bike',
                photoURL: 'Contour_Bike.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Contour_Half_Blind',
                description: 'Contour of trees drawn, followed by a blind contour of the buildings in the distance.',
                photoURL: 'Contour_Half_Blind.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Contour_Portrait_01',
                description: 'a description for Contour_Portrait_01',
                photoURL: 'Contour_Portrait_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_01',
                description: 'a description for Figure_01',
                photoURL: 'Figure_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_02',
                description: 'a description for Figure_02',
                photoURL: 'Figure_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_03',
                description: 'a description for Figure_03',
                photoURL: 'Figure_03.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_04',
                description: 'a description for Figure_04',
                photoURL: 'Figure_04.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_05',
                description: 'a description for Figure_05',
                photoURL: 'Figure_05.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_06',
                description: 'a description for Figure_06',
                photoURL: 'Figure_06.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_07',
                description: 'a description for Figure_07',
                photoURL: 'Figure_07.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_08',
                description: 'a description for Figure_08',
                photoURL: 'Figure_08.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_09',
                description: 'a description for Figure_09',
                photoURL: 'Figure_09.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_10',
                description: 'a description for Figure_10',
                photoURL: 'Figure_10.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_11',
                description: 'a description for Figure_11',
                photoURL: 'Figure_11.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_12',
                description: 'a description for Figure_12',
                photoURL: 'Figure_12.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_13',
                description: 'a description for Figure_13',
                photoURL: 'Figure_13.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_14',
                description: 'a description for Figure_14',
                photoURL: 'Figure_14.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_15',
                description: 'a description for Figure_15',
                photoURL: 'Figure_15.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_16',
                description: 'a description for Figure_16',
                photoURL: 'Figure_16.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_17',
                description: 'a description for Figure_17',
                photoURL: 'Figure_17.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_18',
                description: 'a description for Figure_18',
                photoURL: 'Figure_18.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_19',
                description: 'a description for Figure_19',
                photoURL: 'Figure_19.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Portrait_01',
                description: 'a description for Ink_Portrait_01',
                photoURL: 'Ink_Portrait_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Portrait_02',
                description: 'a description for Ink_Portrait_02',
                photoURL: 'Ink_Portrait_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Still_01',
                description: 'a description for Ink_Still_01',
                photoURL: 'Ink_Still_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Still_02',
                description: 'a description for Ink_Still_02',
                photoURL: 'Ink_Still_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Still_03',
                description: 'a description for Ink_Still_03',
                photoURL: 'Ink_Still_03.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Perspective_01',
                description: 'a description for Perspective_01',
                photoURL: 'Perspective_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Perspective_02',
                description: 'a description for Perspective_02',
                photoURL: 'Perspective_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'SelfPortrait_01',
                description: 'a description for SelfPortrait_01',
                photoURL: 'SelfPortrait_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Still_Lactaid',
                description: 'a description for Still_Lactaid',
                photoURL: 'Still_Lactaid.jpg',
                tags: [TAG.TRADITIONAL, TAG.ILLUSTRATOR],
            })];
    }
}

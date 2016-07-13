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

    static getPieces() {
        return [
            new Piece({
                title: 'Typography Poster',
                description: 'My first time laying out typography like this; straight letterforms need some work.',
                photoURL: 'Typography_01.jpg',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'LPB Monogram',
                description: 'LPB monogram.',
                photoURL: 'Logo_01.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'RJ Monogram',
                description: 'Simplistic rendering of RJ letters.',
                photoURL: 'Logo_02.png',
                tags: [TAG.ILLUSTRATOR],
            }),
            new Piece({
                title: 'SG Monogram',
                description: 'SG monogram.',
                photoURL: 'Logo_03.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Sticker - Kelly',
                description: 'Part of a series of personalized "stickers."',
                photoURL: 'Stickers_01.jpg',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Sticker - Gains',
                description: 'Part of a series of personalized "stickers."',
                photoURL: 'Stickers_02.jpg',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Sticker - No',
                description: 'Part of a series of personalized "stickers."',
                photoURL: 'Stickers_03.jpg',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Orchid Ball Snapchat Filter',
                description: 'Snapchat filter designed for Phi Sigma Rho Orchid Ball. Left: Illustrator design; Right: In use.',
                photoURL: 'Orchid_Ball_Snapchat_Filter_Mock_01.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Orchid Ball Snapchat Filter',
                description: 'Snapchat filter designed for Phi Sigma Rho Orchid Ball. Left: Illustrator design; Right: In use.',
                photoURL: 'Orchid_Ball_Snapchat_Filter_Mock_02.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Orchid Ball Snapchat Filter',
                description: 'Snapchat filter designed for Phi Sigma Rho Orchid Ball. Left: Illustrator design; Right: In use.',
                photoURL: 'Orchid_Ball_Snapchat_Filter_Mock_03.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'ACM Formal Snapchat Filter',
                description: 'Snapchat filter designed for ACM Formal. Left: Illustrator design; Right: In use.',
                photoURL: 'ACM_Formal_Snapchat_Filter_Mock_01.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'ACM Formal Snapchat Filter',
                description: 'Snapchat filter designed for ACM Formal. Left: Illustrator design; Right: In use.',
                photoURL: 'ACM_Formal_Snapchat_Filter_Mock_02.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Superhero Logo 01',
                description: 'Superhero logo designed for original character, VR Man.',
                photoURL: 'Superhero_Logo_01.png',
                tags: [TAG.ILLUSTRATOR],
            }),
            new Piece({
                title: 'Superhero Logo 02',
                description: 'Superhero logo designed for original character, Goat Man.',
                photoURL: 'Superhero_Logo_02.png',
                tags: [TAG.ILLUSTRATOR],
            }),
            new Piece({
                title: 'Logo',
                description: 'Logo designed for friends.',
                photoURL: 'Lolly_Logo.png',
                tags: [TAG.ILLUSTRATOR, TAG.TOP],
            }),
            new Piece({
                title: 'Charcoal_Still_02',
                description: 'Compressed charcoal drawing of still life.',
                photoURL: 'Charcoal_Still_02.jpg',
                tags: [TAG.TRADITIONAL, TAG.TOP],
            }),
            new Piece({
                title: 'Concept_CarbCat_01',
                description: 'Concept art for original character, CarbCat.',
                photoURL: 'Concept_CarbCat_01.jpg',
                tags: [TAG.TRADITIONAL, TAG.TOP],
            }),
            new Piece({
                title: 'Ink_Portrait_01',
                description: 'First live portrait with ink and Sumi brush. Struggled with shading and lightening of ink.',
                photoURL: 'Ink_Portrait_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Portrait_02',
                description: 'Second portrait with ink and Sumi brush.',
                photoURL: 'Ink_Portrait_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Still_01',
                description: 'First experimentation with India ink. Subject is a strange collection of still life objects.',
                photoURL: 'Ink_Still_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Still_02',
                description: 'Second experimentation with India ink. Subject is a strange collection of still life objects.',
                photoURL: 'Ink_Still_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Ink_Still_03',
                description: 'Third experimentation with India ink. Subject is a strange collection of still life objects.',
                photoURL: 'Ink_Still_03.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Seuss Birthday',
                description: 'Image for a birthday card. Left: Original sketch done in pencil, inked with pen. Middle: Colored with color pencil. Right: Scanned and colored with GIMP.',
                photoURL: 'Seuss_Birthday.png',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Contour_Portrait_01',
                description: 'Contour drawing of a friend in his natural environment (eating cereal and watching Netflix for hours).',
                photoURL: 'Contour_Portrait_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Charcoal_Still_01',
                description: 'My first time using charcoal. Subject is an amalgamation of still life objects.',
                photoURL: 'Charcoal_Still_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Concept_Heroes_01',
                description: 'Conception of two heroes based on myself and a companion. First time using a bamboo pen and black India ink.',
                photoURL: 'Concept_Heroes_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Contour_Bike',
                description: 'Contour drawing of two road bikes.',
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
                title: 'Figure_01',
                description: 'Gesture drawings of classmates, done in 2-3 minutes each.',
                photoURL: 'Figure_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_02',
                description: 'Gesture drawings of classmates, done in 2-3 minutes each.',
                photoURL: 'Figure_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_03',
                description: 'Gesture drawings of classmates, done in 2-3 minutes each.',
                photoURL: 'Figure_03.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_04',
                description: 'Gesture drawings of classmates, done in 2-3 minutes each.',
                photoURL: 'Figure_04.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_05',
                description: 'Gesture drawings of a nude model, done in 30 seconds.',
                photoURL: 'Figure_05.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_06',
                description: 'Gesture drawings of a nude model, done in 30 seconds.',
                photoURL: 'Figure_06.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_07',
                description: 'Gesture drawings of a nude model, done in one minute.',
                photoURL: 'Figure_07.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_08',
                description: 'Gesture drawings of a nude model, done in one minute.',
                photoURL: 'Figure_08.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_09',
                description: 'Gesture drawings of a nude model, done in one minute.',
                photoURL: 'Figure_09.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_10',
                description: 'Gesture drawings of a nude model, done in one minute.',
                photoURL: 'Figure_10.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_11',
                description: 'Gesture drawings of a nude model, done in one minute.',
                photoURL: 'Figure_11.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_12',
                description: 'Gesture drawings of a nude model, done in three minutes.',
                photoURL: 'Figure_12.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_13',
                description: 'Gesture drawings of a nude model, done in 30 seconds.',
                photoURL: 'Figure_13.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_14',
                description: 'Gesture drawings of a nude model, done in one minute.',
                photoURL: 'Figure_14.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_15',
                description: 'Gesture drawings of a nude model, done in five minutes.',
                photoURL: 'Figure_15.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_16',
                description: 'Gesture drawings of a nude model, done in five minutes.',
                photoURL: 'Figure_16.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_17',
                description: 'Gesture drawings of a nude model, done in five minutes.',
                photoURL: 'Figure_17.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_18',
                description: 'Gesture drawings of a nude model, done in five minutes.',
                photoURL: 'Figure_18.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Figure_19',
                description: 'Gesture drawings of a nude model, done in 3-5 minutes.',
                photoURL: 'Figure_19.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Perspective_01',
                description: 'A study on perspective in the library.',
                photoURL: 'Perspective_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Perspective_02',
                description: 'A sketch of my room.',
                photoURL: 'Perspective_02.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'SelfPortrait_01',
                description: 'Self-portrait rendered with pencil, destroyed, and reconstructed.',
                photoURL: 'SelfPortrait_01.jpg',
                tags: [TAG.TRADITIONAL],
            }),
            new Piece({
                title: 'Still_Lactaid',
                description: 'Still life.',
                photoURL: 'Still_Lactaid.jpg',
                tags: [TAG.TRADITIONAL],
            }),
        ];
    }
}

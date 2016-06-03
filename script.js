/**
 * Created by lowellbander on 6/1/16.
 */

var pieces = [
new Piece({
        title: 'Charcoal_Still_01',
        description: 'My first time using charcoal. Subject is an amalgamation of still life objects.',
        photoURL: 'photos/Charcoal_Still_01.jpg'
    }),
new Piece({
        title: 'Charcoal_Still_02',
        description: 'a description for Charcoal_Still_02',
        photoURL: 'photos/Charcoal_Still_02.jpg'
    }),
new Piece({
        title: 'Concept_CarbCat_01',
        description: 'a description for Concept_CarbCat_01',
        photoURL: 'photos/Concept_CarbCat_01.jpg'
    }),
new Piece({
        title: 'Concept_Heroes_01',
        description: 'Conception of two heroes based on myself and a companion. First time using a bamboo pen and black India ink.',
        photoURL: 'photos/Concept_Heroes_01.jpg'
    }),
new Piece({
        title: 'Contour_Bike',
        description: 'a description for Contour_Bike',
        photoURL: 'photos/Contour_Bike.jpg'
    }),
new Piece({
        title: 'Contour_Half_Blind',
        description: 'Contour of trees drawn, followed by a blind contour of the buildings in the distance.',
        photoURL: 'photos/Contour_Half_Blind.jpg'
    }),
new Piece({
        title: 'Contour_Portrait_01',
        description: 'a description for Contour_Portrait_01',
        photoURL: 'photos/Contour_Portrait_01.jpg'
    }),
new Piece({
        title: 'Figure_01',
        description: 'a description for Figure_01',
        photoURL: 'photos/Figure_01.jpg'
    }),
new Piece({
        title: 'Figure_02',
        description: 'a description for Figure_02',
        photoURL: 'photos/Figure_02.jpg'
    }),
new Piece({
        title: 'Figure_03',
        description: 'a description for Figure_03',
        photoURL: 'photos/Figure_03.jpg'
    }),
new Piece({
        title: 'Figure_04',
        description: 'a description for Figure_04',
        photoURL: 'photos/Figure_04.jpg'
    }),
new Piece({
        title: 'Figure_05',
        description: 'a description for Figure_05',
        photoURL: 'photos/Figure_05.jpg'
    }),
new Piece({
        title: 'Figure_06',
        description: 'a description for Figure_06',
        photoURL: 'photos/Figure_06.jpg'
    }),
new Piece({
        title: 'Figure_07',
        description: 'a description for Figure_07',
        photoURL: 'photos/Figure_07.jpg'
    }),
new Piece({
        title: 'Figure_08',
        description: 'a description for Figure_08',
        photoURL: 'photos/Figure_08.jpg'
    }),
new Piece({
        title: 'Figure_09',
        description: 'a description for Figure_09',
        photoURL: 'photos/Figure_09.jpg'
    }),
new Piece({
        title: 'Figure_10',
        description: 'a description for Figure_10',
        photoURL: 'photos/Figure_10.jpg'
    }),
new Piece({
        title: 'Figure_11',
        description: 'a description for Figure_11',
        photoURL: 'photos/Figure_11.jpg'
    }),
new Piece({
        title: 'Figure_12',
        description: 'a description for Figure_12',
        photoURL: 'photos/Figure_12.jpg'
    }),
new Piece({
        title: 'Figure_13',
        description: 'a description for Figure_13',
        photoURL: 'photos/Figure_13.jpg'
    }),
new Piece({
        title: 'Figure_14',
        description: 'a description for Figure_14',
        photoURL: 'photos/Figure_14.jpg'
    }),
new Piece({
        title: 'Figure_15',
        description: 'a description for Figure_15',
        photoURL: 'photos/Figure_15.jpg'
    }),
new Piece({
        title: 'Figure_16',
        description: 'a description for Figure_16',
        photoURL: 'photos/Figure_16.jpg'
    }),
new Piece({
        title: 'Figure_17',
        description: 'a description for Figure_17',
        photoURL: 'photos/Figure_17.jpg'
    }),
new Piece({
        title: 'Figure_18',
        description: 'a description for Figure_18',
        photoURL: 'photos/Figure_18.jpg'
    }),
new Piece({
        title: 'Figure_19',
        description: 'a description for Figure_19',
        photoURL: 'photos/Figure_19.jpg'
    }),
new Piece({
        title: 'Ink_Portrait_01',
        description: 'a description for Ink_Portrait_01',
        photoURL: 'photos/Ink_Portrait_01.jpg'
    }),
new Piece({
        title: 'Ink_Portrait_02',
        description: 'a description for Ink_Portrait_02',
        photoURL: 'photos/Ink_Portrait_02.jpg'
    }),
new Piece({
        title: 'Ink_Still_01',
        description: 'a description for Ink_Still_01',
        photoURL: 'photos/Ink_Still_01.jpg'
    }),
new Piece({
        title: 'Ink_Still_02',
        description: 'a description for Ink_Still_02',
        photoURL: 'photos/Ink_Still_02.jpg'
    }),
new Piece({
        title: 'Ink_Still_03',
        description: 'a description for Ink_Still_03',
        photoURL: 'photos/Ink_Still_03.jpg'
    }),
new Piece({
        title: 'Perspective_01',
        description: 'a description for Perspective_01',
        photoURL: 'photos/Perspective_01.jpg'
    }),
new Piece({
        title: 'Perspective_02',
        description: 'a description for Perspective_02',
        photoURL: 'photos/Perspective_02.jpg'
    }),
new Piece({
        title: 'SelfPortrait_01',
        description: 'a description for SelfPortrait_01',
        photoURL: 'photos/SelfPortrait_01.jpg'
    }),
new Piece({
        title: 'Still_Lactaid',
        description: 'a description for Still_Lactaid',
        photoURL: 'photos/Still_Lactaid.jpg'
    })];

var context = document.querySelector('#content');
var scene = new Scene({
    pieces: pieces,
    context: context
});
scene.render();

/**
 * Created by lowellbander on 6/1/16.
 */

var pieces = [
//    new Piece({//        title: 'ink',
//        body: 'ink description',
//        photoURL: 'photos/ink.jpg'
//    }),
    new Piece({
        title: 'Concept',
        body: 'concept description',
        photoURL: 'photos/Concept_CarbCat_01.jpg'
    }),
    new Piece({
        title: 'Charcoal',
        body: 'charcoal description',
        photoURL: 'photos/Charcoal_Still_01.jpg'
    }),
    new Piece({
        title: 'Charcoal',
        body: 'charcoal description',
        photoURL: 'photos/Charcoal_Still_02.jpg'
    }),
    new Piece({
        title: 'Contour',
        body: 'contour description',
        photoURL: 'photos/Contour_Half_Blind.jpg'
    }),
    new Piece({
        title: 'Contour',
        body: 'contour description',
        photoURL: 'photos/Contour_Portrait_01.jpg'
    }),
    new Piece({
        title: 'Contour',
        body: 'contour description',
        photoURL: 'photos/Contour_Bike.jpg'
    }),
        new Piece({
        title: 'Concept',
        body: 'concept description',
        photoURL: 'photos/Concept_Heroes_01.jpg'
    }),
    new Piece({
        title: 'Ink',
        body: 'ink description',
        photoURL: 'photos/Ink_Portrait_01.jpg'
    }),
    new Piece({
        title: 'Ink',
        body: 'ink description',
        photoURL: 'photos/Ink_Portrait_02.jpg'
    }),
    new Piece({
        title: 'Ink',
        body: 'ink description',
        photoURL: 'photos/Ink_Still_01.jpg'
    }),
    new Piece({
        title: 'Ink',
        body: 'ink description',
        photoURL: 'photos/Ink_Still_02.jpg'
    }),
        new Piece({
        title: 'Ink',
        body: 'ink description',
        photoURL: 'photos/Ink_Still_03.jpg'
    }),
];

var context = document.querySelector('#content');
var scene = new Scene({
    pieces: pieces,
    context: context
});
scene.render();

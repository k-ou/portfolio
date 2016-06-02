/**
 * Created by lowellbander on 6/1/16.
 */

var pieces = [
    new Piece({
        title: 'ink',
        body: 'ink description',
        photoURL: 'photos/ink.jpg'
    }),
    new Piece({
        title: 'illustrator',
        body: 'illustrator description',
        photoURL: 'photos/illustrator.jpg'
    }),
    new Piece({
        title: 'heros',
        body: 'heros description',
        photoURL: 'photos/heros.jpg'
    }),
    new Piece({
        title: 'charcoal',
        body: 'charcoal description',
        photoURL: 'photos/charcoal.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'photos/carbcat.jpg'
    }),
];

var context = document.querySelector('#content');
var scene = new Scene({
    pieces: pieces,
    context: context
});
scene.render();

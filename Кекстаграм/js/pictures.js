'use strict';
var COMMENTS_USERS = ['Все отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var photos = [];
var Photo = {};
var clk;
var f = 1;
var imageGal = document.querySelector('.gallery-overlay-image');
//var likeGal = document.querySelector('.likes-count');
//var commGal = document.querySelector('.comments-count');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 1; i <= 26; i++) {
    Photo = {
        url: 'photos/' + i + '.jpg',
        likes: getRandomInt(15, 201),
        comments: [COMMENTS_USERS[Math.floor(Math.random() * COMMENTS_USERS.length)]]
    };
    photos[i - 1] = Photo;
}
console.log(photos);
var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
var similarPictureList = document.querySelector('.pictures');

var renderPicture = function (post) {
    var pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture img').setAttribute('src', post.url);
    pictureElement.querySelector('.picture-likes').textContent = post.likes;
    pictureElement.querySelector('.picture-comments').textContent = post.comments;
    return pictureElement;
};
var fragment = document.createDocumentFragment();
for (var k = 0; k < photos.length; k++) {
    fragment.appendChild(renderPicture(photos[k]));
}
similarPictureList.appendChild(fragment);
//document.querySelector('.gallery-overlay').classList.remove('hidden');
//document.querySelector('.gallery-overlay-image').setAttribute('src', photos[0].url);
//document.querySelector('.likes-count').textContent = photos[0].likes;
// document.querySelector('.comments-count').textContent = photos[0].comments;
//var setupOpen = document.querySelectorAll('.pictures .picture');
//var setupOpen = document.querySelector('.pictures');
var setup = document.querySelector('.gallery-overlay');
var close = document.querySelector('.gallery-overlay-close');
var clickElem = null;
var onClick = function (evt) {


    clickElem = evt.target;
    clickElem.classList.add('clicked');
    clk = document.querySelector('.clicked');
    console.log(clk);
    f = clk.src[clk.src.length - 5];
    // imageGal.setAttribute('src', photos[f-1].url);
    // likeGal.textContent = clk.likes;
    // commGal.textContent = clk.comments;
    console.log(clk.src);
    console.log(f - 1);

};
var onPictureClick = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            setup.classList.add('hidden');
        }
    });

    imageGal.setAttribute('src', photos[f - 1].url);


};
var onPopupClose = function () {
    setup.classList.add('hidden');
};
similarPictureList.addEventListener('click', onPictureClick);
close.addEventListener('click', onPopupClose);

similarPictureList.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        setup.classList.remove('hidden');
    }
});
close.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        setup.classList.add('hidden');
    }
});

similarPictureList.addEventListener('click', onClick);
//document.querySelector('.gallery-overlay-image').setAttribute('src', photos[0].url);
//document.querySelector('.likes-count').textContent = photos[0].likes;
// document.querySelector('.comments-count').textContent = photos[0].comments;
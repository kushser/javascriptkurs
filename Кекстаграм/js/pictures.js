'use strict';
var COMMENTS_USERS =['Все отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var photos = [ , , , , , , , , , , , , , , , , , , , , , , , , , ,];
var Photo ={};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
for (var i = 1; i <= 26; i++ ){
 Photo = {
    url: 'photos/' + i + '.jpg',
    likes:  getRandomInt(15, 201),
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
    var fragment =document.createDocumentFragment();
for (var k = 0; k < photos.length; k++) {
    fragment.appendChild(renderPicture(photos[k]));
}
    similarPictureList.appendChild(fragment);
 document.querySelector('.gallery-overlay').classList.remove('hidden');
 document.querySelector('.gallery-overlay-image').setAttribute('src', photos[0].url);
 document.querySelector('.likes-count').textContent = photos[0].likes;
 document.querySelector('.comments-count').textContent = photos[0].comments;
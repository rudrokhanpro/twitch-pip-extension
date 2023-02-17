const video = document.querySelector('.video-ref video');

if (video && document.pictureInPictureEnabled) {
  video.requestPictureInPicture();
}

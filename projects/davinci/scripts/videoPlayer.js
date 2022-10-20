const video = document.getElementsByClassName("videoEmbed")[0];
const videoEmbedIframe = document.getElementsByClassName("videoEmbedIframe")[0];

function playVideo(){
    video.style.display = "block"
}

function stopVideo(){

    video.style.display = "none"
    let url = videoEmbedIframe.getAttribute('src');
    videoEmbedIframe.setAttribute('src', ''); //removing the source to stop the video, then adding it back for replay
    videoEmbedIframe.setAttribute('src', url);
}
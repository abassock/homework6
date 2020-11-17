var video = document.getElementById(myVideo);

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.90;
	console.log(video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
	}

});

document.querySelector("#volumeSlider").addEventListener("change", function(){
	video.volume = (document.querySelector("#volumeSlider").value)/100;
	console.log((document.querySelector("#volumeSlider").value)/100);
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log(document.querySelector("#volume").innerHTML);
});


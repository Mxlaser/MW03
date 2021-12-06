//Début première fonction-------------------------------------------------------

//---Variable affectée à la video
var video = document.getElementById("video");
//---Variable affectée au bouton play/pause
var playpause = document.getElementById("playpause");
playpause.addEventListener("click", PlayPauseVideo);

//---Fonction qui met sur play ou sur pause la video
function PlayPauseVideo()
{
  if(video.paused==true||video.ended==true)
  {
    video.play();
    playpause.src = "Images/pause.png";
  }
  else
  {
      video.pause();
      playpause.src = "Images/play.png";
  }
}

//Fin première fonction---------------------------------------------------------

//Début deuxième fonction-------------------------------------------------------

//---Variable affectée au bouton stop
var stop = document.getElementById("stop");
stop.addEventListener("click", Stop);

//---Fonction qui stoppe la video
function Stop()
{
  video.pause();
  video.currentTime = 0;
  playpause.src = "Images/play.png";
}
//Fin deuxième fonction---------------------------------------------------------

//Début troisième fonction------------------------------------------------------

//Variable affectée au bouton langue fr
var fr = document.getElementById("fr");
fr.addEventListener("click", Fr);

//---Fonction qui change la langue de la video en français
function Fr()
{
  video.src = "Videos/CV-Fr.mp4";
  playpause.src = "Images/play.png";
}

//Fin troisième fonction--------------------------------------------------------

//Début quatrième fonction------------------------------------------------------

//---Variable affectée au bouton langue en
var en = document.getElementById("en");
en.addEventListener("click", En);

//---Fonction qui change la langue de la video en anglais
function En()
{
  video.src = "Videos/CV-En.mp4";
  playpause.src = "Images/play.png";
}

//Fin quatrième fonction--------------------------------------------------------



setInterval(function temps()
{
  if(video.curentTime > 0)
  {
    document.getElementById("maPresentation").classList.remove("surbrillanceOff");
    document.getElementById("maPresentation").classList.add("surbrillanceOn");
  }
  else if(video.currentTime >= 21)
  {
    document.getElementById("maPresentation").classList.remove("surbrillanceOn");
    document.getElementById("maPresentation").classList.add("surbrillanceOff");
    document.getElementById("textePresentation").classList.remove("surbrillanceOff");
    document.getElementById("textePresentation").classList.add("surbrillanceOn");
  }
  else if(video.currentTime >= 33)
  {
    document.getElementById("textePresentation").classList.remove("surbrillanceOn");
    document.getElementById("textePresentation").classList.add("surbrillanceOff");
    document.getElementById("competences").classList.remove("contourOff");
    document.getElementById("competences").classList.add("contourOn");
  }
  else if (video.currentTime >= 36)
  {
    document.getElementById("competences").classList.remove("contourOn");
    document.getElementById("competences").classList.add("contourOff");
    document.getElementById("formations").classList.remove("contourOff");
    document.getElementById("formations").classList.add("contourOn");
  }
},1000)

// const baslik = document.getElementsByClassName("ornek");
const baslik = document.querySelector("ornek");
const ses = document.querySelector("audio");
const buton1 = document.querySelector("#btn1");
const buton2 = document.querySelector("#btn2");
const buton3 = document.querySelector("#btn3");
const telefon = document.querySelector(".telefon");

// baslik[0].style.color = "red";
// baslik[0].style.textAlign = "center";
document.querySelector(".ornek").style.textAlign = "center";
document.querySelector(".ornek").style.color = "red";

telefon.onmouseover = () => {
  telefon.src = "./img/aslan1.jpeg";
};
telefon.onmouseout = () => {
  telefon.src = "./img/aslan2.jpeg";
};

buton1.onclick = () => {
  telefon.src = "./img/img.gif";
  ses.play();
};

buton2.onclick = () => {
  telefon.src = "./img/telbağla.gif";
  ses.pause();
};
buton3.onclick = () => {
  telefon.src = "./img/telfırlat.gif";
  ses.pause();
};

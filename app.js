let userName = prompt("adınızı giriniz")
let isim = document.querySelector("#myName")
isim.innerHTML = `<strong>${userName}</strong>`


let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


function showTime() {
    const today = new Date();  
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days[today.getDay()];
    let info = document.querySelector("#myClock")
    info.innerHTML = `${h}:${m}:${s} ${d}`
  }
  
  setInterval(showTime, 1000);

  showTime();

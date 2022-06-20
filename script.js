let hour=document.getElementById("hour");

let min=document.getElementById("minute");

let sec=document.getElementById("second");

let setclock = setInterval(() =>{

let time= new Date();

let hr=time.getHours();

let mi=time.getMinutes();

let se=time.getSeconds();

sec=sec*6;

hr=(hr*30)+(mi/2);

mi=(mi*6)+(se/10);

se=se*6;

hour.style.transform=`rotate(${hr}deg)`;

minute.style.transform=`rotate(${mi}deg)`;

second.style.transform=`rotate(${se}deg)`;

},1000);
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("am_pm");

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = "AM";

    if(h > 12){
        h = h-12;
        am_pm = "PM";
    }
    else if(h==12){
        am_pm = "PM";
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = am_pm;

    setInterval(() => {
        updateTime();
    }, 1000);
    
}
updateTime();

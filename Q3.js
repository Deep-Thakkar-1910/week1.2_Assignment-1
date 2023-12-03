/*
Question : Create a terminal Clock (HH:MM:SS);

 */


const updateTime = ()=>{
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    document.getElementById('terminalClock').textContent =` The current time is ${h}h : ${m}m : ${s}s`;
}

setInterval(updateTime,1000);
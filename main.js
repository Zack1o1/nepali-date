
function time(){
    let hours_show = document.getElementById('hours')
    let minutes_show = document.getElementById('minutes')
    let seconds_show = document.getElementById('seconds')
    let am_pm_show = document.getElementById('am-pm')
    
    let now_date = new Date
    let now_local_time = now_date.toLocaleTimeString()
    let hours = now_date.getHours()
    let minutes = now_date.getMinutes()
    let seconds = now_date.getSeconds()
    am_pm_show.textContent = hours < 12 ? 'am' : 'pm'
    
    
    if (hours >12){
        hours -=12
    }
    
    hours_show.textContent = hours < 10 ? `0${hours}` : `${hours}`
    minutes_show.textContent = minutes < 10 ? `0${minutes}` : `${minutes}`
    seconds_show.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`
    
}
function date(){
    let week_show = document.getElementById('week')
    let month_show = document.getElementById('month')
    let day_show = document.getElementById('day')
    let year_show = document.getElementById('year')
    
    const week_array = ['आइतबार','सोमवार','मङ्गलवार', 'बुधवार', 'बिहिवार', 'शुक्रवार', 'शनिवार']
    let nep_date = new NepaliDate()
    let week = nep_date.format('dd')
    let month = nep_date.format('MMMM')
    let day = nep_date.format('D')
    let year = nep_date.getYear()
    
    if (week ==="Sat"){
        week_show.classList.add('red_color')
    }
    week_show.textContent = `${week}`
    month_show.textContent = `${month}`
    day_show.textContent = day < 10 ? `0${day}` : `${day}`
    year_show.textContent = `${year}`
}

function greeting(){
    let time = new Date()
    
    if (time.getHours() < 12 && time.getHours() > 5){
        window.alert("Good Morning!\n Have a nice day!!!")
    }
    if (time.getHours() > 12 && time.getHours() < 15){
        window.alert("Good afternoon!\n Enjoy the beautiful day!!!")
    }
    if (time.getHours() > 15 && time.getHours() < 18){
        window.alert("Good Evening!\n Hope you enjoy the day")
    } 
    if (time.getHours() > 18 && time.getHours() < 24){
        window.alert("Good Night!\n Have a good night!!!")
    }
}

setTimeout(greeting, 5000)
setInterval(time, 1000)
date()


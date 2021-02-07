//滾動頁面動畫

let page01 = document.querySelector('.back')
let page02 = document.querySelector('.S1')
let page03 = document.querySelector('.S2')
let page04 = document.querySelector('.S3')



page01.addEventListener('click',function(){
    let Where = document.querySelector('.home')
    window.scrollTo({
        top:Where.offsetTop,
        behavior:"smooth"
    })
})

page02.addEventListener('click',function(){
    let Where = document.querySelector('.aboutus')
    window.scrollTo({
        top:Where.offsetTop,
        behavior:"smooth"
    })
})

page03.addEventListener('click',function(){
    let Where = document.querySelector('.music')
    window.scrollTo({
        top:Where.offsetTop,
        behavior:"smooth"
    })
})

page04.addEventListener('click',function(){
    let where = document.querySelector('.comment')
    window.scrollTo({
        top:where.offsetTop,
        behavior:"smooth"
    })
})


//音樂區///
const AsYouWish = {
    Img:'../images/Asyouwish.jpg',
    Name:'As you wish',
    Time:3+':'+33,
    TimeSec:213,
    SongStates: 'flase',
    atList: document.querySelector('AsYouWish'),
    link:'AsYouWish.mp3'
}

const Butterfly = {
    Img:"../images/81466807_1591689057114_1_600x600.jpg",
    Name:'Butterfly',
    Time:3+':'+39,
    TimeSec:219,
    SongStates:'flase',
    atList:document.querySelector('.Butterfly'),
    link:'BUTTERFLY.mp3'
}
const Hmph = {
    Img:"../images/WJSN-Chocome-Hmph.jpg",
    Name:'Hmph',
    Time:3+':'+21,
    TimeSec:201,
    SongStates:'flase',
    atList: document.querySelector('.Hmph'),
    link:'Hmph.mp3'
}

const LaLaLove = {
    Img:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/WJSN_-_WJ_Stay%3F.jpg/220px-WJSN_-_WJ_Stay%3F.jpg",
    Name:'LaLaLove',
    Time:3+':'+37,
    TimeSec:217,
    SongStates:'flase',
    atList: document.querySelector('.LaLaLove'),
    link:'LaLaLove.mp3'
}
let Song = [AsYouWish, Butterfly, Hmph, LaLaLove]
let audio = document.querySelector('.audioSrc')
let plyaerStates = document.querySelector('.material-icons')
let music01 = document.querySelector('.AsYouWish')
let music02 = document.querySelector('.Butterfly')
let music03 = document.querySelector('.Hmph')
let music04 = document.querySelector('.LaLaLove')


//以下是音樂播放器的內容
//播放器上的資訊

function who(i) {
    document.querySelector('.player').style.opacity= 1; //顯示預設為隱藏的播放器       
    console.log('who:' + i) //提示歌曲
    plyaerStates.innerHTML = 'pause_circle' //預設不播放任何歌曲 顯示暫停中
    Icon = document.querySelector('.icon') 
    Title = document.querySelector('.music_title')
    TimeCode = document.querySelector('.TimeCode')
    TimeCode.innerHTML = "0：00"
    Icon.innerHTML = '<img src="'+Song[i].Img+'">'
    Title.innerHTML = Song[i].Name 
    setInterval(() => {
        TimeCode.innerHTML = formatSecond(audio.currentTime)
    }, '1000');
    
    audio.src = './audio/'+Song[i].link
}

function formatSecond(Secs){ //歌曲時間長度的單位轉換
    let min = Math.floor(Secs/60)
    let sec = Math.floor(Secs - (min*60))
    if (sec < 10) {
        sec = '0' + sec
    } 
    return min + '：' + sec
}

//音樂進度條效果

let total = 0 //宣告進度條
let currentTime = 0 //音樂起始點時間
let Redline = document.querySelector('.Redline')


function playing(){
    
    //console.log('進度條速率:'+total+'px/s')
    
    let songlister = setInterval(() => {
        //console.log('playing~')
        
            if (Math.round(total) == 100){
                clearInterval(songlister)
                //console.log('end')
            }
            total =  (audio.currentTime / audio.duration) * 100 //進度條速率
            //console.log('進度條速率:'+Math.round(total)+'%')
            //console.log(currentTime)
            if (Math.round(total) != 100){
                Redline.style.width =  total + '%'// console.log('進度:'+total*currentTime)
            } else if(Math.round(total) == 100){
                plyaerStates.innerHTML = 'replay'
                clearInterval (songlister)   

            }
            
        
    }, '200');
    
    
}

 



//以下是四首歌曲的監控
music01.addEventListener('click',function(){ who(0);Song[0].SongStates = 'true' })
music02.addEventListener('click',function(){ who(1);Song[1].SongStates = 'true' })
music03.addEventListener('click',function(){ who(2);Song[2].SongStates = 'true' })
music04.addEventListener('click',function(){ who(3);Song[3].SongStates = 'true' })


plyaerStates.addEventListener('click',function(){ //監控音樂播放按鈕
    //console.log(plyaerStates)
    
    if (plyaerStates.innerHTML == 'play_circle_outline') { //暫停播放
        plyaerStates.innerHTML = 'pause_circle'
        audio.pause()
        
    } else if (plyaerStates.innerHTML == 'replay'){ //重播一次
        plyaerStates.innerHTML = 'play_circle_outline'
        RedlineEvenListener()
        audio.play()
        playing()
    }
    else {
        plyaerStates.innerHTML = 'play_circle_outline' //播放
        RedlineEvenListener()
        audio.play()
        playing()
        
        
    } 
}
)

//寫時間的進度條+TimeCode


//監測進度條是否填滿
function RedlineEvenListener(){
    if (Math.round(total) == 100){
        total = 0
        Redline.style.width = 0 + '%'
    } else {
        return
    }
}


//留言板系統

let FansName = document.querySelector('.name')
let content = document.querySelector('.content')
let sendout = document.querySelector('.sendout')
let data = {
    'name' : FansName.value,
    'content':content.value
}
sendout.addEventListener('click',function(){
    if(FansName.value == ''){
        alert('UJUNG 記得輸入名字哦')
    } else if (content.value == ''){
        alert('UJUNG 請大聲的告訴我們你想說的話吧')
    } else {
        sendData(data)
        
        FansName.value = ''
        content.value = ''
    }

})

function sendData(data){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://script.google.com/macros/s/AKfycbxXbDeick52I83BOHY0YQETANSMugQl-LrXQOTNvPZ4rWds3ZlDbYfNhw/exec');
    request.responseType = 'text';
    request.onload = function() {
        console.log(request.response)
        
    };
    request.send(data)
    // console.log('完成')
}
//1rWmvDUTrDqu1BZaWjDsg9pa7Q61-QItOAcmpQjFQK91Ln7IHomgEsJ56

//https://script.google.com/macros/s/AKfycbxXbDeick52I83BOHY0YQETANSMugQl-LrXQOTNvPZ4rWds3ZlDbYfNhw/exec
//AKfycbxXbDeick52I83BOHY0YQETANSMugQl-LrXQOTNvPZ4rWds3ZlDbYfNhw
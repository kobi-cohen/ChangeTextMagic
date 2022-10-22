console.log('press file load ...')
const pressArea = document.querySelector('.pressArea')
const date = new Date()
const timerStart = date.getTime()
let flagPress=false
const pressTimer = {start:null,end:null}


const pressStart = (e) =>{
  console.log('touch start')
  pressTimer.start=new Date().getTime()
  
}
const pressEnd = (e) =>{
    pressTimer.end=new Date().getTime()
  console.log('touch end')

  const totalTimePress = ((pressTimer.end-pressTimer.start)/1000)
  console.log(totalTimePress)
  if (totalTimePress>1){
    if (!flagPress){
        flagPress=!flagPress
        gibrish()
    }
        else{
            flagPress=!flagPress
            normal()
    }
    }

}

pressArea.addEventListener('touchstart',pressStart)
pressArea.addEventListener('touchend',pressEnd)
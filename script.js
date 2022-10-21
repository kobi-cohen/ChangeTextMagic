const originalText ={value:'שמי אסף סלמון'} 
const gibrishText ={value:'משי ספה לסימו'} 
const text = document.querySelector('#text')
let intervalCounter = 0
text.innerHTML=originalText.value

const interval = setInterval(()=>{
    if (intervalCounter>0){

        clearInterval(interval)
        console.log('clear interval')
        setTimeout(()=>{
            console.log('set Timeout')
            text.innerHTML=originalText.value
            
        },4000)
    }
    console.log('first interval')

    text.innerHTML=gibrishText.value
    intervalCounter++
    
},2000)




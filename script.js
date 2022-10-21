let intervalCounter = 0

const visitedUser = localStorage.getItem('visit')

console.log(visitedUser)
localStorage.setItem('visit',1)


const originalText ={value:'כל כך פשוט לקרוא משפט'} 
const gibrishText ={value:'לכ כך שפוט קרלו שטמש'} 
const text = document.querySelector('#text')

text.innerHTML=originalText.value
const unit = () =>{

    
    const interval = setInterval(()=>{
        if (intervalCounter>0){
            
            clearInterval(interval)
            console.log('clear interval')
            setTimeout(()=>{
                console.log('set Timeout')
                text.innerHTML=originalText.value
                
            },10000)
        }
        console.log('first interval')
        
        text.innerHTML=gibrishText.value
        intervalCounter++
        
    },5000)
    
}
    
    
    
if (!visitedUser){
    unit()
}
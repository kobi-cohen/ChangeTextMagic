


const originalText ={value:'כל כך פשוט לקרוא משפט'} 
const gibrishText ={value:'לכ כך שפוט קרלו שטמש'} 
const text = document.querySelector('#text')



const normal = () =>{

text.innerHTML=originalText.value

}

const gibrish = ()=>{


text.innerHTML=gibrishText.value
}    

normal()



const originalText ={value:'אני יודע לקרוא'} 
const gibrishText ={value:'אני דוע קרלו'} 
const text = document.querySelector('#text')



const normal = () =>{

text.innerHTML=originalText.value

}

const gibrish = ()=>{


text.innerHTML=gibrishText.value
}    

normal()
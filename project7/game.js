const TITLE={
    0:'UR right',
    1:'too small',
   2:'too large',
}
let results = []
let addNum = 0
let itemArr = document.querySelectorAll('.item');
let span = document.querySelectorAll('.prompt');
let img = document.querySelector('.succee img')
let  randomNum = random(0,100)
function random(min, max) {
return Math.floor(Math.random() * (max - min)) + min
}

function prompt(num) {
if( num<randomNum){
    return 1
}
if( num>randomNum){
    return 2
}
if( num==randomNum){
    return 0
}
}
function add(){
let ipt =  document.querySelector('.ipt')
if(  itemArr[addNum]){
          results.push(ipt.value)
          let resPrompt = prompt(ipt.value)
          span[addNum].innerHTML= TITLE[resPrompt]
          if(resPrompt==0){
            img.src = './img/yes.jpeg'
            img.style='display:block'
          }
          if(resPrompt==1||resPrompt==2){
            img.src = './img/no.jpeg'
            img.style='display:block'
          }
        itemArr[addNum].innerHTML=results[addNum]
}else{
    alert('Already Failed')
}
 addNum+=1;
 ipt.value=null

}
function reset(){
results.map((item,index)=>{
itemArr[index].innerHTML=null
span[index].innerHTML= null

})
img.style='display:none'
results=[]
addNum=0
}

let res=document.getElementById("res");
let btn0=document.getElementById("btn0");
let btn1=document.getElementById("btn1");
let btnClr=document.getElementById("btnClr");
let btnEql=document.getElementById("btnEql");
let btnSum=document.getElementById("btnSum");
let btnSub=document.getElementById("btnSub");
let btnMul=document.getElementById("btnMul");
let btnDiv=document.getElementById("btnDiv");

btn0.addEventListener("click",()=>{
  res.innerHTML+=0
})
btn1.addEventListener("click",()=>{
  res.innerHTML+=1
})
btnClr.addEventListener("click",()=>{
  res.innerHTML=""
})
btnSum.addEventListener("click",()=>{
  res.innerHTML+="+"
})
btnSum.addEventListener("click",()=>{
  res.innerHTML+="-"
})
btnDiv.addEventListener("click",()=>{
  res.innerHTML+="/"
})
btnMul.addEventListener("click",()=>{
  res.innerHTML+="*"
})
btnEql.addEventListener("click",()=>{
  let value=res.innerHTML;
  res.innerHTML=Number(eval(value.replace(/([01]+)/g,'0b$1')).toString()).toString(2)
})


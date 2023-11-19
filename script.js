let nameIpnut = document.querySelector("#input1");
let fnameIpnut = document.querySelector('#input2');
let ageIpnut = document.querySelector('#input3');
let addBtn = document.querySelector("#add");
let tbl = document.querySelector("#table");



addBtn.addEventListener("click", ()=>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = nameIpnut.value
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = fnameIpnut.value
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.innerText = ageIpnut.value
    tr.appendChild(td3);
    tbl.appendChild(tr)
});


let myDiv=document.querySelector("#color");
let Btn1=document.querySelector('#c1')
let Btn2=document.querySelector('#c2')
let Btn3=document.querySelector('#c3')
let Btn4=document.querySelector('#c4')
let Btn5=document.querySelector('#c5')
let Btn6=document.querySelector('#c6')

Btn1.addEventListener("click", ()=>{
    myDiv.style.backgroundColor="darkcyan";
    myDiv.innerText="DARKCYAN"
})
Btn2.addEventListener("click", ()=>{
    myDiv.style.backgroundColor="chocolate";
    myDiv.innerText="CHOCOLATE"
})

Btn3.addEventListener("click", ()=>{
    myDiv.style.backgroundColor="lightskyblue";
    myDiv.innerText="LIGHTSKYBLUE"
})
Btn4.addEventListener("click", ()=>{
    myDiv.style.backgroundColor="plum";
    myDiv.innerText="PLUM"
})
Btn5.addEventListener("click", ()=>{
    myDiv.style.backgroundColor="bisque";
    myDiv.innerText="BISQUE"
})
Btn6.addEventListener("click", ()=>{
    myDiv.style.backgroundColor="maroon";
    myDiv.innerText="MAROON"
})





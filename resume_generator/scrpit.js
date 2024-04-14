// alert("loading")
function addNewWEField(){


    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb)

}

function addNewAQField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")
    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb)

}

//generating cv
function generateCV(){
    // console.log("generatingcv");

    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=namefield;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("twtT").innerHTML=document.getElementById("twtField").value;

    document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;


    document.getElementById("objective").innerHTML=document.getElementById("objectiveField").value;

    let wes=document.getElementByClassName("weField");

    let str='';

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>` ;
    }

    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("aqField");

    let str1='';

    for(let e of aqs){
        str1+=`<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display='block';

}

function printCV(){
    window.print();
}
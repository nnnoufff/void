/*var i = document.getElementById("221");
i.innerHTML="nouf";
 <form action="#"> <div><h1>ADD NEW BOOK</h1>
           ID: <input type="number" id="bookId" placeholder="enter id" required><br>
           BOOK: <input type="text" placeholder="enter book name" id="bookName" required><br>
           AUTHOR: <input type="text" placeholder="enter athor name" id="athorName" required><br>
           PRICE :<input type="number" id="bookPrice" placeholder="enter price" required><br>
           QUANTITY: <input type="number" placeholder="enter quantity" id="bookQuantity" required><br>
           <input type="button" value="add book" id="newBook" ></div>
        </form>
        <div id="tableOfContent"></div>
function conpname() {
var name = document.getElementById("name");
console.log(name.value);
}

function entername() {
    var buttm = document.getElementById('namebyym');
    buttm.addEventListener("click",conpname,false);
    
}
window.addEventListener("load",entername,false);

var names=[[1,"book1","athor1",11,4]
          ,[2,"book2","athor2",22,5]
          ,[3,"book3","athor3",33,7]
          ,[4,"book4","athor4",44,3]
          ,[5,"book5","athor5",55,1]
        ];

function addnewbook(){
    var bookId=document.getElementById("bookId");
    var bookName=document.getElementById("bookName");
    var athorName=document.getElementById("athorName");
    var bookPrice=document.getElementById("bookPrice");
    var bookQuantity=document.getElementById("bookQuantity");
    var temp = [parseInt(bookId.value),bookName.value,athorName.value,bookPrice.value,bookQuantity.value];
    names.push(temp);
}
console.log(names);
function addnewbookB(){
    var but =document.getElementById("newBook");
    but.addEventListener("click",addnewbook,false);
}

var table =document.getElementById("tableOfContent");
var html="<table border = 2><thead><tr><th>bookid </th><th>book name</th><th>athoure name</th><th>book price</th> <th>bookQuantity</th></tr></thead><tbody>";
for (var i =0 ; i< names.length ;i++) {
    html+="<tr>";
    for (var j = 0 ; j<=4 ;j++) {
    html += "<td>"+names[i][j]+"</td>" ;
    
}html+="</tr>";
}
html+="</tbody></table>";
table.innerHTML= html;

window.addEventListener("load",addnewbookB,false);
function printname(){
var name = document.getElementById("name");
var titel =document.getElementById("titel");
titel.innerHTML="<h1>hello"+name.value;
};

function writename(){
    var i =document.getElementById("writename");
    i.addEventListener("click",printname,false);
}


function pic(){
    var img = document.getElementById("img");
    var num = Math.floor(1+ Math.random()*3);
    img.setAttribute("src", "img"+num +".jpg");
}

function hi(){
    var pop =document.createElement("div");

    document.body.appendChild(pop);
    var messeg=document.createTextNode("welcome to my page");
    pop.appendChild(messeg);
}
function sayhi(){
    var button=document.getElementById("hi");
    button.addEventListener("click",hi,false);
}
function sprizeme(){
    var sip = document.createElement("h1");
    document.body.appendChild(sip);
    sip.innerHTML = "you need to leave ";
}
    <img src="img1.jpg" alt="random pic" id="img">
    <button onclick="pic();">click</button></div>

    <div><input type="button" name="hi" value="tell me hi" id="hi"></div>
    
    <button onclick="sprizeme()">do not click me bitch</button>
<div id ="titel">
        <input type="text" id="name">
        <input type="button"id="writename" value="click">
    </div>
window.addEventListener("load",pic,false);
window.addEventListener("load",writename,false);
window.addEventListener("load",sayhi,false);    var temp = item;
    temp.addEventListener('click',function yy() {item.style.textDecoration='line-through';},false)
var list = document.getElementById("mylist");//ol
var task = document.getElementById("task");//input
function addToList() {
    var item = document.createElement("li");
    item.innerHTML = task.value;
    list.appendChild(item);
    //console.log(task.value);
    //item.addEventListener('click',function yy() {item.style.textDecoration='line-through';},false);
    item.addEventListener('click',function yy() {list.removeChild(item);},false)

}
*/


function calc() {
    var name = document.getElementById("name");
    var DOB = document.getElementById("DOB");
    var date = new Date(DOB.value);
    var today = new Date();
    if (name.value === "") {
        // Alert the user if the input is empty
        alert("enter name.");
    }else if(DOB.value==="") {
        alert("enter date.")
    }else{
        age=today.getFullYear()-date.getFullYear();
        var contaner=document.createElement("div");
        contaner.innerHTML="your name is:"+name+"<br> yor age is "+age+"years old";
        document.body.appendChild(contaner);
    }
}












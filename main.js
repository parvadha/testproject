//24th July
//select h2
var h2=document.querySelector('.htwo')//<h2 id="two">innerHTML,innerText,textContent</h2>
var btn=document.querySelector("#btn")
var markTxt=document.querySelector("#mark-txt")//<input type="text" value="50'>
btn.addEventListener('click',()=>{
    let mark=markTxt.value
    h2.innerText=(mark>=50)?"Pass":"Fail"
    h2.style.backgroundColor=(mark>=50)?"green":"red"
})

//select element from html to Javascript
// document.getElementById("id")--return single Element
// document.getElementsByTagName("tagName")--Array
// document.getElementsByClassName("class attr value")---array
//document.querySelector("tagname/#id/.class")---first matching elem
//document.querySelectorAll("tagname/#id/.class")---all matching elem(Array)

//through event object we can select the particular elemenst


//createElement(),remove(),parentElement,append()
// Todo Task
{/* <div class="todo-task">
            <input type="text" id="task-txt">
            <button class="add-todo">add Todo</button>
            <div class="todo-demo">
                <!-- <h2>Task1 <button>Delete</button></h2> -->
            </div>

        </div>
 */}

var addTodo=document.querySelector(".add-todo")
var todoDemo=document.querySelector(".todo-demo")
var taskTxt=document.querySelector("#task-txt")

addTodo.addEventListener('click',()=>{
    var task=taskTxt.value
    var h2=document.createElement("h2")//<h2></h2>
    h2.innerHTML=`${task} <button onclick="deleteTask(event)">delete task</button>`
    todoDemo.append(h2)

})

function deleteTask(event)
{
    // console.log(event.target)
    event.target.parentElement.remove()
}

//-------------------------------Student databse-----------------
{/* <html>
    <head><title>Javascript</title>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div class="header">
            <h2>Student Database</h2>
        </div>
        <div class="student-form">
            <p>Enter Name:<input type="text" id="name-txt"></p>
            <p>Enter course:<input type="text" id="course-txt"></p>
            <p><button id="add-stu">Add student</button></p>
        </div>
        <div class="demo">
            <!-- //innerHTML -->
        </div>
                <script src="./index.js"></script>
       
    </body>
</html> */}
//Array of objects
const students=[
    {sname:"Arun",course:"React"},
    {sname:"Aruna",course:"Javascript"},
    {sname:"Sakthi",course:"Nodejs"},
    {sname:"Latha",course:"Python"}
]
// console.log(students);
// console.log(students[2]);// {id:3,sname:"Sakthi",course:"Nodejs"}
// console.log(students[2].sname);

let div=document.querySelector('.demo')
//select name and course textboxes
var nameTxt=document.querySelector("#name-txt")
var courseTxt=document.querySelector("#course-txt")
var addStu=document.querySelector("#add-stu")

listStudent()
addStu.addEventListener('click',()=>
{
    let sname=nameTxt.value
    let course=courseTxt.value

    console.log(sname,course)
    students.push({sname,course})
    console.log(students)
    listStudent()
})


function listStudent()
{
    console.log(students.length)
    
let table="<table border='1' style='width:50%'><tr><th>Name</th><th>Course</th><th>Actions</th></tr>"
    for(let i=0;i<students.length;i++)
        {
            table+=`<tr><td>${students[i].sname}</td><td>${students[i].course}</td><td><button onclick="deleteStudent(event)">Delete</button></td></tr>`
        }
        div.innerHTML=table 
}

function deleteStudent(event)
{
    event.target.parentElement.parentElement.remove()
}

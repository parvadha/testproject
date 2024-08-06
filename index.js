//before to change any element content,style
//first need to select the element

//selecting elements using dom methods
//1.document.getElementById('elem-id')
//2.document.getElementsByTagName('elem-Name')
//1.document.getElementsByClassName('elem-class')
//1.document.querySelector('')
//1.document.querySelectorAll('elem-id')

// var wt_txt=document.querySelector('#wt')
// var ht_txt=document.querySelector("#ht")

// function calcBMI()
// {
//     var w=wt_txt.value
//     var h=ht_txt.value
//     var bmi=Math.round(w/(h*h))
//     console.log('BMI=',bmi)
// }

//vowels check

// const arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr);
//accessing array values arr[index]
// console.log(arr[4]);

// const arun_info={
    //property:value,
//     fullName:"ArunGuna",
//     age:20,
//     addr:{
//         city:"Madurai",
//         pin:123456
//     },
//     friends:['Bala','Raja','Vijay'],
//     hasDrivLic:true,
//     job:null,    
// }

// console.log(arun_info);
//Accessing object property into 2 ways
//1.Dot operator 2.[]

// console.log(arun_info.addr.city)
// console.log(arun_info["fullName"]);


//Array of number
const arr=[10,20,30,40]
//array of strings
const fruits=["Apple","Orange","Mango"]

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
    let table="<table border='1' style='width:50%'><tr><th>Name</th><th>Course</th><th>Actions</th></tr>"

    console.log(students.length)
    
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

//i=0 0<4 students[0].sname=Arun students[0].course="react" i++=1
// 1<4 students[1].sname=Aruna students[1].course="Javascript" i=2
//2<4 students[2].sname=Sakthi students[2].course="Nodejs" i++=3
//3<4 students[3].sname=Latha students[3].course="react"  i++=4
//4<4 condition fail exit for loop


//----------------------------------------------------------------------












































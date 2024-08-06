// Exercise #2->To display employee name and salary using map()
// -----------
const emp=[
{eid:1,ename:"Prabhu",salary:40000,city:'Chennai'},
{eid:2,ename:"Bala",salary:50000,city:'Madurai'},
{eid:3,ename:"Deva",salary:20000,city:'Madurai'},
{eid:4,ename:"Naveen",salary:40000,city:'Trichy'},
{eid:5,ename:"Gowtham",salary:10000,city:'Chennai'},
{eid:6,ename:"Selva",salary:60000,city:'Chennai'},
];
//newArr=oldArr.map(func);
// const newEmp=emp.map(e=>e.city);
// console.log(newEmp);

//filter(func)
const highEmpSal=emp.filter(e=>e.salary>=50000)


let table="<table border='1px'><tr><th>EmpName</th><th>Salary</th></tr>";
highEmpSal.map((e)=>{
    table+=`<tr><td>${e.ename}</td><td>${e.salary}</td></tr>`;
});
table+='</table>';
document.querySelector('.container').innerHTML=table;

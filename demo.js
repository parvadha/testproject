let usersData=[]
const containerDiv=document.querySelector(".container")
const getUsersBtn=document.querySelector("#users")

// function getData()
// {

// fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(data=>usersData=data).then(()=>displayData())
            
// }
async function getData()
{
let data=await fetch("https://jsonplaceholder.typicode.com/users")
let response=await data.json()
usersData=await response
displayData()
            
}
function displayData()
{
    
    let table="<table><tr><th>Name</th><th>emailId</th></tr>"
    usersData && usersData.map(user=>table+=`<tr><td>${user.name}</td><td>${user.email}</td></tr>`)
     
     containerDiv.innerHTML=table
   
}

getUsersBtn.addEventListener('click',getData)
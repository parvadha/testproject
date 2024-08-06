const arr=[1,2,3,4,5]
console.log(arr)

let table=`<table border="1"><tr><th>Number</th><th>Square</th></tr>`
arr.map(a=>table+=`<tr><td>${a}</td><td>${a*a}</td></tr>`)
let div=document.querySelector(".container")
div.innerHTML=table
// const name="Latha"
// const pic="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"

// Using Object
// const user={name:"latha",pic:"https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"}


// let card=""
// card+=`<div class="card">
//      <img src=${user.pic} alt="">
//      <h2>${user.name}</h2>
//     </div>`
    
    
// var container=document.querySelector(".container")
// container.innerHTML=card

//using Array of Objects
//----------------------------------
// const actors=["Vijay","Ajith"] //Array of strings
// console.log(actors)

//Array of Objects
const users=[
    {name:"Surya",pic:"https://miro.medium.com/v2/resize:fit:736/1*zODN2D1nGrDYFbuO3LU23w.jpeg"},
    
    {name:"Ajith",pic:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOzrFrS2vl2gVGniodFNm_LDj-XFFkKwwa1IhBXSrI0_ijsX_6FC-n-bbzYBuoYXm13IePW0-y_-bAcsS7-aWyTobGlltRwqOfr8NLntB_hp6ta3jFtFhO5FjE9RFAofM3iAPy8Rb4tSLU/s1600/1477355_569411306478285_193880037_n.jpg"},

    {name:"Vijay",pic:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/thalapathy_vijay_political_plunge-three_four.jpg?VersionId=YTXGaw7CpLGF9Jz3ibFnzUuzkNGQMtwC"},
  
    {name:"Trisha",pic:"https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2019/03/23/Actress-trisha-latest-Stunning-Stills-.jpg?quality=90&zoom=1&ssl=1"}
]

console.table(users)
viewUsers()

function viewUsers()
{
var user_card=""
users.map(user=>{
    user_card+=`<div class="card">
    <img src=${user.pic} alt="">
    <h2>${user.name} <i class="bi bi-trash3" onclick="deleteUser(event)"></i></h2>
    </div>`
})

var container=document.querySelector(".container")
container.innerHTML=user_card
}

var userTxt=document.querySelector('#user')
var searchBtn=document.querySelector(".search")

searchBtn.addEventListener('click',()=>{
    let user_name=userTxt.value
    let result=users.find(user=>user.name==user_name)
    console.log(result)
})

function findUser()
{

}
//popupbox show and hide
var plusBtn=document.querySelector(".plus")
var overlay=document.querySelector(".overlay")
var cancelBtn=document.querySelector(".cancel")

plusBtn.addEventListener('click',()=>{
    overlay.style.display="block"
})

cancelBtn.addEventListener("click",()=>{
    overlay.style.display="none"
})

//add user data

var addUserBtn=document.querySelector(".add-user")
var nameTxt=document.querySelector("#name-txt")
var picTxt=document.querySelector("#pic-txt")

addUserBtn.addEventListener("click",()=>{
    let name=nameTxt.value
    let pic=picTxt.value

    console.log(name,pic);
    //add users to array
    users.push({name,pic})

    console.log(users);
    viewUsers()

})

function deleteUser(event)
{
    console.log(event.target.parentElement.parentElement)
    event.target.parentElement.parentElement.remove()
    // viewUsers()
}
// I want good control flow and function encapsulation for this project.
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user.
// Each user div should have the users name, username, and city they are located in.
// when a div is clicked on, it should fetch all posts associated with the user id.

const container = document.querySelector("#container");
const postDiv = document.createElement('div')



// example()

// function example() {
//     $.get([some url here], [some callback function that gets access to data here])
// }


const h1 = document.createElement('h1')
h1.innerText = 'Click to load Users'
h1.className = 'h1'
container.append(h1)
getbtn()
function getbtn() {
  
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", accessUsers);
}

function accessUsers() {
  $(h1).hide()
  $.get("https://jsonplaceholder.typicode.com/users", logUsers);
}

function logUsers(userArray) {
  for (let i = 0; i < userArray.length; i++) {
    let eachUser = userArray[i];
    createDiv(eachUser);
  }
}

function createDiv(object) {
  const userDiv = document.createElement("div");
  userDiv.className = "userDiv";
  userDiv.id = object.id;
  userDiv.innerText = `Name: ${object.name} \n username: ${object.username} \n city: ${object.address.city}`;
  console.log(object);
  container.appendChild(userDiv);
  selectId(object.id);
}

function selectId(id) {
  const idUser = document.getElementById(id);
  idUser.addEventListener("click", function (e) {
    $(container).hide()
    
    const id = e.target.id;
    
    $.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, getPost);
  });
  
}
backbtn()
function getPost(postArray) {
  for (let i = 0; i < postArray.length; i++) {
    eachPost = postArray[i];
    createPostDiv(eachPost);
   
    
  }
}

function createPostDiv(eachPost) {


  postDiv.className = "postDiv";
  postDiv.innerText = `Title: ${eachPost.title} \n Post: ${eachPost.body} `;
  document.querySelector("body").append(postDiv);
  
}



function backbtn() {

  const back = document.createElement("button")
  back.className = "btn";
  back.innerText = "back";
  document.querySelector("body").append(back);
  back.addEventListener("click", function () {
    
     $(postDiv).hide()
     showContainer()
  });
  
}
function showContainer() {
  $(container).show()
  
}
  

 


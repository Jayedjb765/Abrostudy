
let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
var currentUser=null;


function getUsername()
{
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");
  if(keepLoggedIn=="yes")
  {
    currentUser = JSON.parse(localStorage.getItem('user'));
  }

  else
  {
    currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
}

function Signout()
{
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location="index.html";
}

window.onload = function()
{
  getUsername();
  if(currentUser == null)
  {
    userlink.innerText="Register";
    userlink.href ="registration.html";

    signoutlink.innerText="Login";
    signoutlink.href ="login.html";
  }

  else
  {
    userlink.innerText = currentUser.name;
    userlink.href ="#";

    signoutlink.innerText="Sign Out";
    signoutlink.href ="javascript:Signout()";
  }



}




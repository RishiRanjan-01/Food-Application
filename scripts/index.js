
import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

 import {getData,append} from "./fetch.js"

 let getProfile = ()=>{
    let user_data = JSON.parse(localStorage.getItem("userData"))
 
    let profile =document.getElementById("profile");
    profile.innerHTML = null;
   
    let name = document.createElement("h3")
    name.innerText = "Name : "+user_data.name;
   
    let email = document.createElement("p");
    email.innerText = "Email : "+user_data.email;
   
    let mobile = document.createElement("p");
    mobile.innerText = "Phone : "+user_data.mobile
   
    profile.append(name,mobile,email);
   
 }
 getProfile();
 

let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=arrabiata`;

    let container = document.getElementById("receipe")

  let data =  await getData(url);
  console.log(data.meals)

  append(data.meals,container)



let main = async()=>{

    let query = document.getElementById("input").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    let container = document.getElementById("receipe")

  let data =  await getData(url);
  console.log(data.meals)

  append(data.meals,container)

}

let id;

let debouncing  = ()=> {
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(()=>{
       main();

    },500)
}



document.getElementById("input").addEventListener("input",debouncing)
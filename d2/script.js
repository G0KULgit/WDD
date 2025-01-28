let text = "The in Spain falls mainly in the plain";

let pattern=/^[a-z0-9]+@[a-z]+\.com$/;


const email = document.getElementById("email-user");
console.log(email);
console.log(email.value);

const submit = document.getElementById("validate");
submit.addEventListener("click", function(){
    if(email.value.match(pattern)){
        console.log("Email is valid");

        const result = document.createElement("p");
        result.innerText="Email is valid";
        result.style.backgroundColor="green";
        result.style.color="white";
        document.body.appendChild(result);
        

    }
    else{
        console.log("Email is not valid");
    }
})

//document.querySelectorAll("p")


const listElements = document.querySelectorAll("li");

for (let element of listElements){
    element.style.backgroundColor = "blue";
}
function myLibrary(){
  
}
 

var myForm= document.getElementById("myForm");
            var input= document.getElementById("thing");
            var Item= document.getElementById("list");
            myForm.addEventListener("submit", 
            function(event){
                event.preventDefault()
                createItem(thing.value)
            })
            function createItem(inputItems){
                var items=`<li>${inputItems}
                    <button onclick="deleteElement(this)">delete</button> </li>`
                    Item.insertAdjacentHTML("beforeend", items)
                    input.value=""
                    input.focus()
            }
            function deleteElement(ElementToDelete){
                ElementToDelete.parentElement.remove()
            }

document.getElementById("sign-up").addEventListener("submit" , function(event){
event.preventDefault();
    let name=document.getElementById("name").value.trim
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirmPassword").value;
    let gender = document.getElementById("gender").value;
 let errorMsg = document.getElementById("errorMsg");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      errorMsg.textContent = "All fields are required!";
      return;
    }

    if (password.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters long!";
      return;
    }

    if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match!";
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some(user => user.email === email)) {
      errorMsg.textContent = "Email already registered!";
      return;
    }

    // Save new user
    users.push({ name, email, phonenumber, gender, password, });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    document.getElementById("signupForm").reset();
    errorMsg.textContent = "";
  });

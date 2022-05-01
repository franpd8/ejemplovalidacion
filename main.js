// alert("ey")

const getName= document.querySelector('#name')
console.log(getName)
const getEmail=document.querySelector('#email')
console.log(getEmail)
const getPass1=document.querySelector('#password')
console.log(getPass1)
const getPass2=document.querySelector('#password2')
console.log(getPass2)
const btn=document.querySelector('#form')
const listadoUsuarios=document.querySelector('#all-users')
console.log(listadoUsuarios)

btn.addEventListener('submit',getUser) 
// main.js:15 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at main.js:15:5 << Desde la pantalla de "usuarios" aparece este error que me impide pintar los usuarios

// ^^ recoge datos(descomentar para usar)
console.log(btn)

let users =[]

function getUser(item) {
    item.preventDefault()
    let userData = {
      name: getName.value,
      email: getEmail.value, 
    }
  users.push(userData);
  console.log(userData," Nuevo usuario añadido")
  console.log(users,"Total usuarios")
  localStorage.setItem("users", JSON.stringify(users));
  // userList.innerHTML = ``;
  printUsers()
}


 const cardTitle = document.querySelector('.card-title')
 console.log(cardTitle)

// listadoUsuarios.innerHTML = "hola"

let infoUser = JSON.parse(localStorage.getItem("users"))

  for(let i = 0; i < infoUser.length; i++){

    // main.js:44 Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')at main.js:44:3 << Aparece este error desde la pagina de "crear usuario"
    
  listadoUsuarios.innerHTML += `
                                <div class="card">
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      ${infoUser[i].name}</h5>
                                    <p class="card-text">
                                      ${infoUser[i].email}
                                    </p>
                                  </div>
                                </div>
                                              `
  }

// Si el ejemplo funciona lo convertiremos en funcion con sus eventos 
function printUsers(){
  let infoUser = JSON.parse(localStorage.getItem("users"))
  console.log(infoUser)
  console.log("bicicleta")
  
  for(let i = 0; i < infoUser.length; i++){

    //Pegar aqui el innerHTML que funcione                       `
                          
  }
  
}
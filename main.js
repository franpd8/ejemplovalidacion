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
console.log(btn)
const listadoUsuarios=document.querySelector('#all-users')
console.log(listadoUsuarios) 
// if(document.querySelector('#all-users')){
//   const listadoUsuarios = document.querySelector('#all-users')
// } 


btn.addEventListener('submit', getUser)
listadoUsuarios.addEventListener('click', printUsers)



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
  window.localStorage.setItem("users", JSON.stringify(users));
  listadoUsuarios.innerHTML = ``;
  printUsers()
}

 const cardTitle = document.querySelector('.card-title')
 console.log(cardTitle)
 if (cardTitle) {
  cardTitle.addEventListener('click', () => {
    console.log('btn clicked');
  });
}


//  listadoUsuarios.innerHTML = "hola"



// Si el ejemplo funciona lo convertiremos en funcion con sus eventos 
function printUsers(){
  let infoUser = JSON.parse(localStorage.getItem("users") || "[]");
  

  for(let i = 0; i < infoUser.length; i++){

    // listadoUsuarios.innerHTML +=

    listadoUsuarios.innerHTML += `
    
                                              `
    listadoUsuarios.innerHTML += `
                            <div class="col-sm-6">
                                <div class="card">
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      ${infoUser[i].name}</h5>
                                    <p class="card-text">
                                      ${infoUser[i].email}
                                    </p>
                                  </div>
                                </div>
                              </div>
                                              `
  }
  
}
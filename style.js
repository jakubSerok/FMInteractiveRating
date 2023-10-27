const buttons = document.querySelectorAll(".buttons button");
const submit = document.getElementById("submitButton");
const selectionMsg = document.getElementById("selectionMessage");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
let selected = "";

buttons.forEach(btn=>{
    btn.addEventListener("click", e=>{       
        buttons.forEach(btn => {
            btn.classList.remove("selected");
           
        })
         selected = e.target.textContent;
            e.target.classList.add("selected");
    })
})

submit.addEventListener("click", e=>{
    if(selected!=""){
        selectionMsg.textContent = "You selected "+selected+" out of 5";
        box2.classList.remove("d-none");
        box1.classList.add("d-none");
    }    
})
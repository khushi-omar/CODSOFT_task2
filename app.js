let btnn=document.querySelector("#btn");
let messg=document.querySelector("#msg-submit");

const showmessage = () => {
messg.innerText="YOUR DETAILS ARE SUBMITTED!!";
};

btnn.addEventListener("click",showmessage);
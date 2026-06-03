let usercount = 0;
let comcount = 0;




let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

let userscore = document.querySelector("#user-score")
let comscore = document.querySelector("#comp-score")
let emoji = document.querySelector("#emo1")
let emoji2 = document.querySelector("#emo2")


const comchoice = () =>{
    const option = ["rock","paper","scissors"];
    const randnum = Math.floor(Math.random() * 3);
    return option[randnum];
}


const gamedraw = ()=>{
    msg.innerText="game draw plz try again"
     msg.style.backgroundColor="#081b31";

     emoji.style.display = "none";
     emoji2.style.display="none"
     

}



const showwinner = (userwin,userchoise,comchoices) =>{
    if(userwin === true){
        usercount ++;
        userscore.innerText= usercount
        msg.innerText = `you win! your ${userchoise} computer ${comchoices}`;
        msg.style.backgroundColor="green";
        emoji.style.display = "block";
        emoji2.style.display="none"
    }else{
       comcount ++;
       comscore.innerText = comcount
       msg.innerText =`you lose! your ${userchoise} computer ${comchoices}`;
       msg.style.backgroundColor="red";   
       emoji2.style.display = "block";
       emoji.style.display = "none";

       
    }
}




const playgame = (userchoise) => {
    console.log("user choise =",userchoise);

    const comchoices = comchoice();
    console.log("computer choise =",comchoices);

    if(userchoise === comchoices){
        gamedraw()
    }else{
        let userwin = true;
            if(userchoise==="rock"){
                if(comchoices ==="paper"){
                    userwin = false;
                }else{
                    userwin = true;
                }
            }else if(userchoise==="scissors"){
                if(comchoices ==="rock"){
                    userwin = false;
                }else{
                    userwin = true;
            }
            }else if(userchoise==="paper"){
                if(comchoices ==="scissors"){
                    userwin = false;
                }else{
                    userwin=true;
                }
            }
        
    showwinner(userwin,userchoise,comchoices);
    }};


    


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoise =  choice.getAttribute("id");
    playgame(userchoise)
     })
});

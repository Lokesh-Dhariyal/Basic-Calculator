const button = document.querySelectorAll(".button");
const input = document.getElementById("data");
let text = "";
button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(text == "Error"){
          text="";
        }
        if (e.target.id == "b1") {
          input.innerHTML = "";
          text = "";
        } else if (e.target.id == "b2") {
            text = text.slice(0, -1);
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b3") {
            text += "%";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b4") {
            text += "÷";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b5") {
            text += "7";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b6") {
            text += "8";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b7") {
            text += "9";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b8") {
            text += "x";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b9") {
            text += "4";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b10") {
            text += "5";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b11") {
             text += "6";
             input.innerHTML = `${text}`;
        } else if (e.target.id == "b12") {
            text += "-";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b13") {
             text += "1";
             input.innerHTML = `${text}`;
        } else if (e.target.id == "b14") {
             text += "2";
             input.innerHTML = `${text}`;
        } else if (e.target.id == "b15") {
            text += "3";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b16") {
            text += "+";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b17") {
            text += "00";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b18") {
            text += "0";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b19") {
            text += ".";
            input.innerHTML = `${text}`;
        } else if (e.target.id == "b20") {
            const hold = expr(text)
            text = String(hold)
            if(text == "NaN"){
                text = "Error";
            }
            input.innerHTML = `${text}`;
        }
        
    })
})
function expr (n){
  let ans = "";
  for(let i=0;i<n.length;i++){
    if(n[i]=="x"){
      ans+="*";
    }
    else if(n[i]=="÷"){
      ans+="/";
    }
    else{
      ans+=n[i];
    }
  }
  let out = eval(ans);
  return out;
}
const mode = document.getElementById("light");
const body = document.querySelector("body");
const inner = document.querySelector(".input");
const main = document.querySelector(".main");
const light = document.getElementById("light");
const elements = document.querySelector(".elements");
const org = document.querySelectorAll(".ong")
const b20 = document.getElementById("b20")
let dark = true;
mode.addEventListener("click", () => {
  if (dark) {
    org.forEach((o)=>{
        o.style.color = "navy";
    })
    body.style.backgroundColor = "#dddddd";
    body.style.color = "#212121";
    inner.style.backgroundColor = "#dedede";
    main.style.backgroundColor = "#d2d2d2";
    light.style.backgroundColor = "#dddddd";
    light.style.backgroundImage = "url(./img/dark.png)";
    inner.style.border = "1px solid black";
    main.style.border = "1px solid black";
    button.forEach((btn) => {
      btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#d3d3d3";
        btn.style.boxShadow = "1px 1px 1px #212121a8";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
        btn.style.boxShadow = "";
      });
    });
        b20.style.backgroundColor = "navy";
        b20.style.color = "white";
        b20.addEventListener("mouseover", () => {
          b20.style.backgroundColor = "#000085";
          b20.style.boxShadow = "1px 1px 1px #00008d";
        });
        b20.addEventListener("mouseout", () => {
          b20.style.backgroundColor = "#00008d";
          b20.style.boxShadow = "";
        });
    dark = false;
  } else {
    org.forEach((o) => {
      o.style.color = "orange";
    });
    body.style.backgroundColor = "#212121";
    body.style.color = "white";
    inner.style.backgroundColor = "#232323";
    main.style.backgroundColor = "#1e1e1e";
    light.style.backgroundColor = "#b5b5b5";
    light.style.backgroundImage = "url(./img/light.png)";
    inner.style.border = "1px solid #b1b1b1";
    main.style.border = "1px solid #b1b1b1";
    button.forEach((btn) => {
      btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#1e1e1e";
        btn.style.boxShadow = "1px 1px 1px #ffffffa8";
    });
      btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
        btn.style.boxShadow = "";
      });
    });
    b20.style.backgroundColor = "orange";
    b20.style.color = "white";
      b20.addEventListener("mouseover", () => {
        b20.style.backgroundColor = "#f4a700";
        b20.style.boxShadow = "1px 1px 1px #ff9c08a8";
      });
      b20.addEventListener("mouseout", () => {
        b20.style.backgroundColor = "";
        b20.style.boxShadow = "";
      });
    dark = true;
  }
});

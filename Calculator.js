const input = document.getElementById("data");
let len = 0;

let num1 = 0;
let num2 = 0;

let deci1 = 0;
let deci2 = 0;

let text = "";
let operation = 0;
let after = false;
let flag = false;

document.getElementById("b1").addEventListener("click", (e) => {
  input.innerHTML = "";
  text = "";
  flag = false;
  after = false;
  num1 = 0;
  num2 = 0;
  deci1 = 0;
  deci2 = 0;
  operation = 0;
});
document.getElementById("b2").addEventListener("click", (e) => {
  if (
    text.at(-1) == "+" ||
    text.at(-1) == "-" ||
    text.at(-1) == "%" ||
    text.at(-1) == "x" ||
    text.at(-1) == "÷"
  ) {
    operation = 0;
    flag = false;
  }
  if (text.at(-1) == ".") {
    if (flag) {
      deci2 = 0;
    } else {
      deci1 = 0;
    }
    after = false;
  } else {
    if (!flag) {
      if (after) {
        deci1 = Math.floor(deci1 / 10);
      } else {
        num1 = Math.floor(num1 / 10);
      }
    } else {
      if (after) {
        deci2 = Math.floor(deci2 / 10);
      } else {
        num2 = Math.floor(num2 / 10);
      }
    }
  }
  text = text.slice(0, -1);
  input.innerHTML = `${text}`;
});
document.getElementById("b3").addEventListener("click", (e) => {
  if (text.at(-1) != "%" && operation == 0 && text.length > 1) {
    operation = 1;
    flag = true;
    after = false;
    text += "%";
    input.innerHTML = `${text}`;
  }
});
document.getElementById("b4").addEventListener("click", (e) => {
  if (text.at(-1) != "÷" && operation == 0 && text.length > 1) {
    operation = 2;
    flag = true;
    after = false;
    text += "÷";
    input.innerHTML = `${text}`;
  }
});
document.getElementById("b5").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 7;
    } else {
      num1 = num1 * 10 + 7;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 7;
    } else {
      num2 = num2 * 10 + 7;
    }
  }
  text += "7";
  input.innerHTML = `${text}`;
});
document.getElementById("b6").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 8;
    } else {
      num1 = num1 * 10 + 8;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 8;
    } else {
      num2 = num2 * 10 + 8;
    }
  }
  text += "8";
  input.innerHTML = `${text}`;
});
document.getElementById("b7").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 9;
    } else {
      num1 = num1 * 10 + 9;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 9;
    } else {
      num2 = num2 * 10 + 9;
    }
  }
  text += "9";
  input.innerHTML = `${text}`;
});
document.getElementById("b8").addEventListener("click", (e) => {
  if (text.at(-1) != "x" && operation == 0 && text.length > 1) {
    operation = 3;
    flag = true;
    after = false;
    text += "x";
    input.innerHTML = `${text}`;
  }
});
document.getElementById("b9").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 4;
    } else {
      num1 = num1 * 10 + 4;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 4;
    } else {
      num2 = num2 * 10 + 4;
    }
  }
  text += "4";
  input.innerHTML = `${text}`;
});
document.getElementById("b10").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 5;
    } else {
      num1 = num1 * 10 + 5;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 5;
    } else {
      num2 = num2 * 10 + 5;
    }
  }
  text += "5";
  input.innerHTML = `${text}`;
});
document.getElementById("b11").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 6;
    } else {
      num1 = num1 * 10 + 6;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 6;
    } else {
      num2 = num2 * 10 + 6;
    }
  }
  text += "6";
  input.innerHTML = `${text}`;
});
document.getElementById("b12").addEventListener("click", (e) => {
  if (text.at(-1) != "-" && operation == 0) {
    if (text.length == 0) {
      flag = false;
      operation = 0;
      after = false;
    } else {
      operation = 4;
      flag = true;
      after = false;
    }
    text += "-";
    input.innerHTML = `${text}`;
  }
});
document.getElementById("b13").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 1;
    } else {
      num1 = num1 * 10 + 1;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 1;
    } else {
      num2 = num2 * 10 + 1;
    }
  }
  text += "1";
  input.innerHTML = `${text}`;
});
document.getElementById("b14").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 2;
    } else {
      num1 = num1 * 10 + 2;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 2;
    } else {
      num2 = num2 * 10 + 2;
    }
  }
  text += "2";
  input.innerHTML = `${text}`;
});
document.getElementById("b15").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 3;
      console.log(deci1);
    } else {
      num1 = num1 * 10 + 3;
      console.log(num1);
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 3;
      console.log(deci2);
    } else {
      num2 = num2 * 10 + 3;
      console.log(num2);
    }
  }
  text += "3";
  input.innerHTML = `${text}`;
});
document.getElementById("b16").addEventListener("click", (e) => {
  if (text.at(-1) != "+" && operation == 0 && text.length > 1) {
    if (text.length == 0) {
      operation = 0;
    } else {
      operation = 5;
      flag = true;
      after = false;
      text += "+";
      input.innerHTML = `${text}`;
    }
  }
});
document.getElementById("b17").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 100 + 0;
    } else {
      num1 = num1 * 100 + 0;
    }
  } else {
    if (after) {
      deci2 = deci2 * 100 + 0;
    } else {
      num2 = num2 * 100 + 0;
    }
  }
  text += "00";
  input.innerHTML = `${text}`;
});
document.getElementById("b18").addEventListener("click", (e) => {
  if (!flag) {
    if (after) {
      deci1 = deci1 * 10 + 0;
    } else {
      num1 = num1 * 10 + 0;
    }
  } else {
    if (after) {
      deci2 = deci2 * 10 + 0;
    } else {
      num2 = num2 * 10 + 0;
    }
  }
  text += "0";
  input.innerHTML = `${text}`;
});
document.getElementById("b19").addEventListener("click", (e) => {
  if (!after) {
    text += ".";
    input.innerHTML = `${text}`;
  }
  after = true;
});
document.getElementById("b20").addEventListener("click", (e) => {
  if (operation == 1) {
    if (deci1 != 0) {
      len = deci1.toString().length;
      deci1 /= 10 * len;
      num1 = Number((num1 + deci1).toFixed(len));
    }
    if (deci2 != 0) {
      len = deci2.toString().length;
      deci2 /= 10 * len;
      num2 = Number((num2 + deci2).toFixed(len));
    }
    if (text[0] == "-" && num1 > 0) {
      num1 = Number(num1 * -1);
    }
    num1 = num1 % num2;
    num2 = 0;
    deci1 = 0;
    deci2 = 0;
    flag = false;
    text = String(num1);
    operation = 0;
    if (num1 % 1 !== 0) {
      deci1 = num1 % 1;
      num1 = Math.floor(num1);
      after = true;
    } else {
      after = false;
    }
  } else if (operation == 2) {
    if (deci1 != 0) {
      len = deci1.toString().length;
      deci1 /= 10 * len;
      num1 = Number((num1 + deci1).toFixed(len));
    }
    if (deci2 != 0) {
      len = deci2.toString().length;
      deci2 /= 10 * len;
      num2 = Number((num2 + deci2).toFixed(len));
    }
    if (text[0] == "-" && num1 > 0) {
      num1 = Number(num1 * -1);
    }
    num1 = num1 / num2;
    num2 = 0;
    deci1 = 0;
    deci2 = 0;
    flag = false;
    text = String(num1);
    operation = 0;
    if (num1 % 1 !== 0) {
      deci1 = num1 % 1;
      num1 = Math.floor(num1);
      after = true;
    } else {
      after = false;
    }
  } else if (operation == 3) {
    if (deci1 != 0) {
      len = deci1.toString().length;
      deci1 /= 10 * len;
      num1 = Number((num1 + deci1).toFixed(len));
    }
    if (deci2 != 0) {
      len = deci2.toString().length;
      deci2 /= 10 * len;
      num2 = Number((num2 + deci2).toFixed(len));
    }
    if (text[0] == "-" && num1 > 0) {
      num1 = Number(num1 * -1);
    }
    num1 = num1 * num2;
    num2 = 0;
    deci1 = 0;
    deci2 = 0;
    flag = false;
    text = String(num1);
    operation = 0;
    if (num1 % 1 !== 0) {
      deci1 = num1 % 1;
      num1 = Math.floor(num1);
      after = true;
    } else {
      after = false;
    }
  } else if (operation == 4) {
    if (deci1 != 0) {
      len = deci1.toString().length;
      deci1 /= 10 * len;
      num1 = Number((num1 + deci1).toFixed(len));
    }
    if (deci2 != 0) {
      len = deci2.toString().length;
      deci2 /= 10 * len;
      num2 = Number((num2 + deci2).toFixed(len));
    }
    if (text[0] == "-" && num1 > 0) {
      num1 = Number(num1 * -1);
    }
    num1 = num1 - num2;
    num2 = 0;
    deci1 = 0;
    deci2 = 0;
    flag = false;
    text = String(num1);
    operation = 0;
    if (num1 % 1 !== 0) {
      deci1 = num1 % 1;
      num1 = Math.floor(num1);
      after = true;
    } else {
      after = false;
    }
  } else if (operation == 5) {
    if (deci1 != 0) {
      len = deci1.toString().length;
      deci1 /= 10 * len;
      num1 = Number((num1 + deci1).toFixed(len));
    }
    if (deci2 != 0) {
      len = deci2.toString().length;
      deci2 /= 10 * len;
      num2 = Number((num2 + deci2).toFixed(len));
    }
    if (text[0] === "-" && num1 > 0) {
      num1 = Number(num1 * -1);
    }
    num1 = num1 + num2;
    num2 = 0;
    deci1 = 0;
    deci2 = 0;
    flag = false;
    text = String(num1);
    operation = 0;
    if (num1 % 1 !== 0) {
      deci1 = num1 % 1;
      num1 = Math.floor(num1);
      after = true;
    } else {
      after = false;
    }
  }
  input.innerHTML = `${text}`;
});
const mode = document.getElementById("light");
const body = document.querySelector("body");
const inner = document.querySelector(".input");
const main = document.querySelector(".main");
const button = document.querySelectorAll(".button");
const light = document.getElementById("light");
const elements = document.querySelector(".elements");

let dark = true;
mode.addEventListener("click", () => {
  if (dark) {
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
        btn.style.backgroundColor = "#dadada";
        btn.style.boxShadow = "1px 1px 1px #212121";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
        btn.style.boxShadow = "";
      });
    });
    dark = false;
  } else {
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
        btn.style.backgroundColor = "#1d1d1d";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
      });
    });
    dark = true;
  }
});

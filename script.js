const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btn1 = document.getElementById("btn1");
const list = document.getElementById("list");

let total = +0;
let tip = +0;

document.getElementById("totalCost").innerHTML = `Total is ${total} ₪`;
document.getElementById("tip").innerHTML = `Tip is ${tip} ₪`;

btn1.addEventListener("click", function () {
    //Captrues The Name of the Guest And how much he is going to pay
    let name = input1.value;
    let ammount = +input2.value;

    //Create an Li element inside the ordered List


    if (name === "" || ammount === "") {
        document.getElementsByName("name")[0].placeholder = "Please Enter a Name";
        document.getElementsByName("guest")[0].placeholder = "Please Enter a Number";
        document.getElementById("input1").style.fontSize = "1rem";
        document.getElementById("input2").style.fontSize = "1rem";
    } else {
        const li = document.createElement("li");
        li.innerHTML = `${name} will pay ${ammount} ₪`;
        document.querySelector("ol").appendChild(li);

        li.addEventListener("click", ev => ev.target.remove());
        //Adds Guest Ammount Value
        total += ammount;
        document.getElementById("totalCost").innerHTML = `Total is ${total} ₪`;

        //Calculates How Much Tip Is Needed
        tip = total / 100 * 10;
        document.getElementById("tip").innerHTML = `Tip is ${tip} ₪`;

        document.getElementsByName("name")[0].placeholder = "";
        document.getElementsByName("guest")[0].placeholder = "";
    }

    //Clears input inner value
    input1.value = "";
    input2.value = "";
});



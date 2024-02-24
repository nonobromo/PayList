const pays = [];
let tip = 0;

let total = 0;


const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
    let name = input1.value;
    let ammount = input2.value;

    const list = document.querySelector("#list");

    const li = document.createElement("li");

    list.appendChild(li);


    const divAdd = document.createElement("div");
    divAdd.innerHTML = `${name} is paying ${ammount} ₪`;
    // divAdd.contentEditable = true;
    li.appendChild(divAdd);


    const btnRemove = document.createElement("btn");
    btnRemove.innerHTML = "X";
    li.appendChild(btnRemove);

    btnRemove.addEventListener("click", function () {
        let lastLi = list.lastElementChild
        list.removeChild(lastLi);
        let lastOne = pays.pop();
        total -= lastOne;
        document.querySelector("#totalCost").innerHTML = `Total is ${total}`;

        tip = total / 100 * 10;
        document.querySelector("#tip").innerHTML = `tip is ${tip}`;

        if (total === 0 && tip === 0) {
            document.querySelector("#totalCost").innerHTML = "";
            document.querySelector("#tip").innerHTML = "";
        }
    })
    addPay();
});

function addPay() {
    pays.push(+input2.value);
    input1.value = "";
    input2.value = "";
    console.log(pays);
}


btn2.addEventListener("click", () => {
    calc();
});

function calc() {
    for (let i = 0; i < pays.length; i++) {
        total += pays[i];
    }
    tip = total / 100 * 10;
    document.querySelector("#totalCost").innerHTML = `Total is ${total}`;
    document.querySelector("#tip").innerHTML = `tip is ${tip}`;
}

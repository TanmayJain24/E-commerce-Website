itemCount.addEventListener("input",()=>{

    const itemCount = document.querySelector("#itemCount")
    const subTotal = document.querySelector("#subTotal")
    const total = document.querySelector("#total");
    const tax = document.querySelector("#tax")

    const st = 299*itemCount.value;
    const tx = itemCount.value * 23.92;

    subTotal.innerHTML = st;
    tax.innerHTML = tx;
    total.innerHTML = st+ tx;
})
let expenses = document.querySelector("#expenses");
let expen = document.querySelector("#expen");
let titlexp = document.querySelector(".title-exp");
let titlevalue = document.querySelector(".title-value");
let amount = document.querySelector("#amount");
let budget = document.querySelector("#budget");
let calculate = document.querySelector("#calc");
let dollar = document.querySelector(".dollar");
let exbudget = document.querySelector(".exbudget");

budget.oninput = function (c) {
  let budgets = c.target.value;
  calculate.onclick = function () {
    dollar.innerText = `${budgets}$`;
  };

  expen.oninput = function (e) {
    let word = e.target.value;
    amount.oninput = function (d) {
      let value = d.target.value;
      expenses.onclick = function () {
        let words = document.createElement("h4");
        words.innerText = `- ${word}`;
        titlexp.append(words);
        let values = document.createElement("h4");
        values.classList.add("vals");
        values.innerText = `${value}`;
        titlevalue.append(values);
        let expedollar = document.querySelector(".expedollar");
        let vals = document.querySelectorAll(".vals");
        var total = 0;
        for (i = 0; i < vals.length; i++) {
          total += parseInt(vals[i].innerText);
        }
        expedollar.innerText = `${total}$`;
        let dollars = `${parseInt(budgets) - total}`;
        exbudget.innerText = `${dollars}$`;
        if (parseInt(budgets) < total) {
          exbudget.innerText = `${dollars}$`;
          exbudget.style.color = "rgb(194, 20, 20)";
        } else {
          exbudget.style.color = "rgb(12, 78, 12)";
        }
      };
    };
  };
};

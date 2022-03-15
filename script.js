const billEl = document.querySelector(".bill-input-value");
const numberOfPeopleEl = document.querySelector(".bottom input");
const tipPercentEl = Array.from(
  document.querySelectorAll(".percent-tip-container")
);
const displayTipPerPersonEl = document.querySelector(".result-section .tip");
const displayTotalTipEl = document.querySelector(".result-section .total");
const reset = document.querySelector(".reset-btn");
const errMsg = document.querySelector(".err-msg");
const customEl = document.querySelector(".percent-tip-container input");

let billVal = Number(billEl.value);
let numberOfPeople = Number(numberOfPeopleEl.value);
let tipPercent = 0;

const calculateTip = () => {
  billVal = Number(billEl.value);
  numberOfPeople = Number(numberOfPeopleEl.value);
  if (numberOfPeople < 1) {
    errMsg.textContent = "Can't be less than 1";
  } else {
    errMsg.textContent = "";
    displayTipPerPersonEl.textContent =
      "$" + ((billVal * (tipPercent / 100)) / numberOfPeople).toFixed(2);
    displayTotalTipEl.textContent =
      "$" +
      (
        (billVal * (tipPercent / 100)) / numberOfPeople +
        billVal / numberOfPeople
      ).toFixed(2);
  }
};

billEl.addEventListener("keyup", calculateTip);

numberOfPeopleEl.addEventListener("keyup", () => {
  calculateTip();
});

tipPercentEl.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("custom")) {
      tipPercent = parseInt(item.textContent);
    }
    tipPercentEl.forEach((i) => {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    });
    item.classList.add("active");
    calculateTip();
  });
});

customEl.addEventListener("keyup", () => {
  tipPercent = parseInt(customEl.value);
  calculateTip();
});

reset.addEventListener("click", () => {
  billEl.value = 0;
  calculateTip();
});

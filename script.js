function calculateSimpleInterest() {
  const principalEl = document.getElementById("principal");
  const principal = parseFloat(principalEl.value);

  const interestEl = document.getElementById("interest");
  const interest = parseFloat(interestEl.value);

  const timeEl = document.getElementById("time");
  const time = parseFloat(timeEl.value);

  const simple_interest = (principal * interest * time) / 100;
  const total = principal + simple_interest;

  document.getElementById("interest-result").textContent =
    "₹ " + simple_interest.toFixed(2);
  document.getElementById("total-result").textContent = "₹ " + total.toFixed(2);
}

const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculateSimpleInterest);

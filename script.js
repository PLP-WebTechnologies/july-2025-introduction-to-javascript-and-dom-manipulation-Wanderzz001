document.getElementById("greetBtn").addEventListener("click", function () {
  let customerName = document.getElementById("customerName").value;
  let greeting = document.getElementById("greeting");
  if (customerName.trim() !== "") {
    greeting.textContent = `Good to see you, ${customerName}! Your coffee will be ready soon.`;
  } else {
    greeting.textContent = "Welcome, Guest! Enjoy your stay at Brew Haven.";
  }
});


let menu = {
  "Espresso": 3.0,
  "Latte": 4.5,
  "Cappuccino": 4.0,
  "Mocha": 5.0,
  "Iced Coffee": 3.5
};

function calculateOrder(item, qty, taxRate) {
  let price = menu[item];
  if (!price) return "Sorry, we don’t have that item.";
  let subtotal = price * qty;
  let total = subtotal + subtotal * taxRate;
  return `You ordered ${qty} ${item}(s). Total (with tax): $${total.toFixed(2)}`;
}


document.getElementById("calcBtn").addEventListener("click", function () {
  let drink = document.getElementById("drinkSelect").value;
  let qty = parseInt(document.getElementById("quantity").value, 10);
  let totalMessage = calculateOrder(drink, qty, 0.10);
  document.getElementById("total").textContent = totalMessage;
});

function toggleMessage() {
  let msg = document.getElementById("message");
  if (msg.textContent === "") {
    msg.textContent = "🌟 Today’s special: Buy 1 Cappuccino, Get 1 Free!";
  } else {
    msg.textContent = "";
  }
}



let menuList = document.getElementById("menuList");
for (let item in menu) {
  let li = document.createElement("li");
  li.textContent = `${item} — $${menu[item].toFixed(2)}`;
  menuList.appendChild(li);
}

let countdown = 3;
console.log("Preparing your order:");
while (countdown > 0) {
  console.log(`Ready in ${countdown}...`);
  countdown--;
}
console.log("✅ Your coffee is ready!");


document.getElementById("colorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "rgb(255, 250, 240)" ? "#f5f5dc" : "#fffaf0";
});

document.getElementById("newItemBtn").addEventListener("click", function () {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "✨ New Seasonal Brew " + (ul.children.length + 1);
  ul.appendChild(li);
});


document.getElementById("feedbackInput").addEventListener("input", function () {
  let feedback = document.getElementById("feedbackInput").value;
  document.getElementById("feedbackOutput").textContent =
    feedback ? `Customer Feedback: "${feedback}"` : "";
});

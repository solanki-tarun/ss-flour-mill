const rate = 32;
const delivery = 6;

document.querySelectorAll(".card").forEach(card => {
  const select = card.querySelector(".qty");
  const priceText = card.querySelector(".price");

  function updatePrice() {
    let qty = select.value;
    let total = qty * (rate + delivery);
    priceText.innerText = "Total: ₹" + total;
  }

  select.addEventListener("change", updatePrice);
  updatePrice();
});

function orderWhatsApp(btn) {
  let card = btn.parentElement;
  let qty = card.querySelector(".qty").value;
  let price = card.querySelector(".price").innerText;

  let message = `Hello, I want to order:
Ram Bhog Atta
Quantity: ${qty} KG
${price}
Address: ______`;

  let url = "https://wa.me/91YOURNUMBER?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
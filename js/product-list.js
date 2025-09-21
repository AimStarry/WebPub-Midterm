// --- Search ---
document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    let name = card.getAttribute("data-name").toLowerCase();
    card.style.display = name.includes(filter) ? "" : "none";
  });
});

// --- Filter by Category ---
document.getElementById("categoryFilter").addEventListener("change", function () {
  let value = this.value;
  document.querySelectorAll(".product-card").forEach(card => {
    if (value === "all" || card.getAttribute("data-category") === value) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// --- Sort Products ---
document.getElementById("sortOptions").addEventListener("change", function () {
  let value = this.value;
  let grid = document.getElementById("productGrid");
  let products = Array.from(grid.querySelectorAll(".product-card"));

  if (value === "priceLowHigh") {
    products.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (value === "priceHighLow") {
    products.sort((a, b) => b.dataset.price - a.dataset.price);
  }

  products.forEach(p => grid.appendChild(p));
});

// --- Add to Cart ---
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function () {
    let name = this.parentElement.querySelector("h4").innerText;
    document.getElementById("cartMessage").innerText = name + " added to cart!";
    setTimeout(() => document.getElementById("cartMessage").innerText = "", 2000);
  });
});

// --- Rating System ---
document.querySelectorAll(".rating .star").forEach(star => {
  star.addEventListener("click", function () {
    let stars = this.parentElement.querySelectorAll(".star");
    stars.forEach(s => s.classList.remove("active"));
    let index = Array.from(stars).indexOf(this);
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("active");
    }
  });
});

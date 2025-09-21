document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  const name = document.getElementById("name").value;


  document.getElementById("popupText").innerText =
    `Thank you, ${name}! Your message has been sent.`;

  document.getElementById("popupMessage").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popupMessage").style.display = "none";
});

window.addEventListener("click", function(e) {
  const popup = document.getElementById("popupMessage");
  if (e.target === popup) {
    popup.style.display = "none";
  }

});
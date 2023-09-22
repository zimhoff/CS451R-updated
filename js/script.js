let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});







document.addEventListener("DOMContentLoaded", function () {
   const categoryDropdown = document.getElementById("category-dropdown");
   const searchInput = document.querySelector('input[name="title"]');
   const dataPostedDropdown = document.querySelector('.dropdown-container .dropdown input[name="date"]');
 
   // Add click event listeners to category options
   categoryDropdown.addEventListener("click", function (event) {
     if (event.target.classList.contains("items")) {
       const selectedCategory = event.target.getAttribute("data-category");
       if (selectedCategory === "all") {
         // Reset to show search bar and date posted dropdown
         searchInput.style.display = "block";
         dataPostedDropdown.style.display = "block";
       } else {
         // Hide the search bar and date posted dropdown
         searchInput.style.display = "none";
         dataPostedDropdown.style.display = "none";
       }
       document.querySelector(".output").value = event.target.textContent;
     }
   });
   
   // Initialize filter with "Show All" selected
   searchInput.style.display = "block";
   dataPostedDropdown.style.display = "block";
 });

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// smooth scroll
const goToTopBtn = document.getElementById('goToTopBtn');

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
          goToTopBtn.classList.add('show');
      } else {
          goToTopBtn.classList.remove('show');
      }
  });

  // Scroll to top when the button is clicked
  goToTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }); 




const cartButton = document.getElementById('cartButton');
const cartDrawer = document.getElementById('cartDrawer');
const closeDrawer = document.getElementById('closeDrawer');

// Open the cart drawer
cartButton.addEventListener('click', () => {
    cartDrawer.classList.add('open');
});

// Close the cart drawer
closeDrawer.addEventListener('click', () => {
    cartDrawer.classList.remove('open');
});

// Function to add items to cart
function addToCart(name, price) {
    const cartItems = document.getElementById('cartItems');
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
    itemDiv.innerHTML = `
                <span>${name}</span>
                <span>$${price.toFixed(2)}</span>
            `;
    cartItems.appendChild(itemDiv);
}
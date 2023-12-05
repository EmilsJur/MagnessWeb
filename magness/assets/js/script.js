'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}




/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");

    
});

fetch('cars_showcase.json')
  .then(response => response.json())
  .then(cars => {
    const carList = document.querySelector('#featured-car-list');
    cars.forEach(car => {
      const carItem = document.createElement('li');
      carItem.innerHTML = `
        <div class="featured-car-card">
          <figure class="card-banner">
            <img src="${car.image}" alt="${car.name} ${car.year}" loading="lazy" width="440" height="300" class="w-100">
          </figure>
          <div class="card-content">
            <div class="card-title-wrapper">
              <h3 class="h3 card-title">
                <a href="#">${car.name}</a>
              </h3>
              <data class="year" value="${car.year}">${car.year}</data>
            </div>
            <ul class="card-list">
              ${car.features.map(feature => `
                <li class="card-list-item">
                  <ion-icon name="${feature.icon}"></ion-icon>
                  <span class="card-item-text">${feature.text}</span>
                </li>
              `).join('')}
            </ul>
            <div class="card-price-wrapper">
              <p class="card-price">
                <strong>$${car.price}</strong> Ar PVN
              </p>
            </div>
          </div>
        </div>
      `;
      carList.appendChild(carItem);
    });
  });
  



  fetch('cars_katalogs.json')
  .then(response => response.json())
  .then(cars => {
    const carList = document.querySelector('.featured-car-list.catalog');
    cars.forEach(car => {
      const carItem = document.createElement('li');
      carItem.innerHTML = `
        <div class="featured-car-card">
          <figure class="card-banner">
            <img src="${car.image}" alt="${car.name} ${car.year}" loading="lazy" width="440" height="300" class="w-100">
          </figure>
          <div class="card-content">
            <div class="card-title-wrapper">
              <h3 class="h3 card-title">
                <a href="#">${car.name}</a>
              </h3>
              <data class="year" value="${car.year}">${car.year}</data>
            </div>
            <ul class="card-list">
              ${car.features.map(feature => `
                <li class="card-list-item">
                  <ion-icon name="${feature.icon}"></ion-icon>
                  <span class="card-item-text">${feature.text}</span>
                </li>
              `).join('')}
            </ul>
            <div class="card-price-wrapper">
              <p class="card-price">
                <strong>$${car.price}</strong> Ar PVN
              </p>
            </div>
          </div>
        </div>
      `;
      carList.appendChild(carItem);
    });
  });

  /** FILTRET */
  document.getElementById('cenaRange').addEventListener('input', function() {
    document.getElementById('cenaMin').value = this.value;
  });
  
  document.getElementById('cenaMin').addEventListener('input', function() {
    document.getElementById('cenaRange').value = this.value;
  });
  
  document.getElementById('cenaMax').value = 100000; // Set the max value to 100000 by default
  
  const gadsSelect = document.getElementById('gads');

// Create an option element for each year from 2000 to 2023
for (let year = 2000; year <= 2023; year++) {
  const option = document.createElement('option');
  option.value = year;
  option.text = year;
  gadsSelect.appendChild(option);
}

  document.getElementById('gadsRange').addEventListener('input', function() {
    document.getElementById('gadsMin').value = this.value;
    document.getElementById('gadsMax').value = this.value;
  });
  
  document.getElementById('gadsMin').addEventListener('input', function() {
    document.getElementById('gadsRange').value = this.value;
  });
  
  document.getElementById('gadsMax').addEventListener('input', function() {
    document.getElementById('gadsRange').value = this.value;
  });
  
  document.getElementById('clearFilters').addEventListener('click', function() {
    // Clear the selected values
    document.getElementById('cenaMin').value = '';
    document.getElementById('cenaMax').value = 100000;
    document.getElementById('marka').value = '';
    document.getElementById('gadsMin').value = '';
    document.getElementById('gadsMax').value = '';
    document.getElementById('degvielasTips').value = '';
  });

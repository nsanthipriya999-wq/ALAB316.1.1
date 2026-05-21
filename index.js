
//Select and cache the <main> element in a variable named mainEl.

// Menu data structure

var menuLinks = [

  { text: 'about', href: '/about' },

  { text: 'catalog', href: '/catalog' },

  { text: 'orders', href: '/orders' },

  { text: 'account', href: '/account' },

];


// Part 1:

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

// Part:2 Creating a Menu Bar

const topmenuEl = document.getElementById("top-menu");

topmenuEl.style.height = "100%";

topmenuEl.style.backgroundColor = "var( --top-menu-bg)"

topmenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons

menuLinks.forEach(function(link) {

    const a = document.createElement("a");

    a.setAttribute("href", link.href);

    a.textContent = link.text;

    topmenuEl.appendChild(a);

});
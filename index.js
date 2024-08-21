/* ========== DOM MANIPULATION PART ONE ==========*/

// Part 1: Getting Started

// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

console.log(mainEl);


// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.   
mainEl.style.backgroundColor = 'var(--main-bg)';

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; 
  // pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add a class of flex-ctr to mainEl.
  // Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

// Part 2: Creating a Menu Bar

   // 1.Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
   const topMenuEl = document.getElementById('top-menu');

   //2. Set the height of the topMenuE1 element to be 100%.
   topMenuEl.style.height = '100%';

   //3. Set the background color of topMenuEl 
   //to the value stored in the --top-menu-bg CSS custom property
   const topMenuBgColor = ('var(--top-menu-bg)');
   topMenuEl.style.backgroundColor = topMenuBgColor;
   
   //4. Add a class "flex-around" to topMenuEl
   topMenuEl.classList.add('flex-around');



// Part 3: Adding Menu Buttons
// Old menu data structure.
//var menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// 1. Iterate over the entire menuLinks array and for each "link" object: 

menuLinks.forEach(link => {
  // 2. Create an <a> element
  const aElement = document.createElement('a');
  
  // 3. On the new element, add an href attribute with its value set to the href property of the "link" object. 
  aElement.setAttribute('href', link.href);
  
  // 4. Set the new element's content to the value of the text property of the "link" object.
  aElement.textContent = link.text;
  
  // 4. Append the new element to the topMenuEl element
  topMenuEl.appendChild(aElement);
});


/* ========== DOM MANIPULATION PART TWO ========== */

/* ========== Part 1: Getting Started (See DOM MANIPULATION PART ONE) ========== */

/* ========== Part 2: Adding Additional HTML and CSS ========== */

//Added the following to index.html.
/* <header>
	<nav id="top-menu"></nav>
	<!-- Add the <nav> element below -->
	<nav id="sub-menu"></nav>
</header>*/

// Added the following to styles.css.
/* header, #top-menu {
	position: relative;
}
#top-menu {
	z-index: 20;
}
#sub-menu {
	width: 100%;
	z-index: 10;
	transition: top 0.5s ease-out;
}
#sub-menu a:hover {
	background-color: var(--top-menu-bg);
}
nav a.active {
	background-color: var(--sub-menu-bg);
	color: var(--main-bg);
}*/

/* ========== Part 3: Creating the Submenu ========== */

// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");

// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.setAttribute("class", "flex-around");

//Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

// 1. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// 2. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";


/* ========== Part 4: Adding Menu Interaction.========== */

// In order to add submenu links, we will need to restructure the menuLinks array within index.js. Update the menuLinks array to the following:

// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = document.querySelectorAll("a");

// 2. Attach a delegated 'click' event listener to topMenuEl.
  // a. The first line of code of the event listener function should call the event object's preventDefault() method.

  topMenuEl.addEventListener("click", function(e)  {
    e.preventDefault();
    // b. The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (!e.target.matches("a")) return;

    // c.Log the content of the <a> to verify the handler is working.
  console.log(e.target.textContent);

// Check if the clicked link is already active
const clickedLinkActive = e.target.classList.contains("active");

// removes "active" class from all links
topMenuLinks.forEach((link) => {

  link.classList.remove("active");

});

  if (!clickedLinkActive) {
    e.target.classList.toggle("active");

    // Get the text content of the clicked link
    const clickedText = e.target.textContent;

    // Find the corresponding link object from menuLinks based on the text content
    const linkObj = menuLinks.find(
      (link) => link.text === clickedText
    );

    // Check if the link object has subLinks and the text content is not "about"
    if (linkObj && linkObj.subLinks && clickedText !== "about"
    ) {
      // Cache the "subLinks" array for later use
      const subLinks = linkObj.subLinks;
      buildSubmenu(subLinks);

      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  } else {
    // Clear the contents of subMenuEl and set its top position to 0 when the active link is clicked again
    subMenuEl.innerHTML = "";
    subMenuEl.style.top = "0";
  }
  // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
  if (e.target.textContent == "about") {
    mainEl.innerHTML = "<h1>About</h1>";
    console.log(`${e.target.textContent}`);
  }

});

/* ========== Part 5: Adding Submenu Interaction ============ */

// Helper function to build submenu
function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

// Iterate over the subLinks array and build submenu
subLinks.forEach(function(link) {
  // Create an <a> element
  const submenuLink = document.createElement('a');
  
  // Add href attribute
  submenuLink.setAttribute('href', link.href);
  
  // Set content
  submenuLink.textContent = link.text;

  // Append to subMenuEl
  subMenuEl.appendChild(submenuLink);
});
}

// Attach a delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener('click', function(e) {
  // Call preventDefault() on the event object
  e.preventDefault();
  
  // Check if the clicked element was not an <a> element
  if (!e.target.matches('a')) {
    return
  };

  // set the CSS top property of subMenuEl to 0
  subMenuEl.style.top = "0";


// Loop through each <a> element in topMenuLinks
topMenuLinks.forEach(function(link) {
  // Remove the "active" class from each <a> element except the clicked one
  if (link !== e.target) {
      link.classList.remove('active');
  }
});

// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;

console.log(e.target.textContent);
});
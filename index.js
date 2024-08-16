
// Part 1: Getting Started
// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

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
   const topMenuBgColor = ('var(--top-menu-bg)').trim();
   topMenuEl.style.backgroundColor = topMenuBgColor;
   
   //4. Add a class "flex-around" to topMenuEl
   topMenuEl.classList.add('flex-around');

// Part 3: Adding Menu Buttons
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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


const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Create the nav bar links
const links = document.querySelectorAll("a");
links[0].textContent = (siteContent["nav"]["nav-item-1"])
links[1].textContent = (siteContent["nav"]["nav-item-2"])
links[2].textContent = (siteContent["nav"]["nav-item-3"])
links[3].textContent = (siteContent["nav"]["nav-item-4"])
links[4].textContent = (siteContent["nav"]["nav-item-5"])
links[5].textContent = (siteContent["nav"]["nav-item-6"])

// add the round image
let roundpic = document.getElementById("cta-img");
roundpic.setAttribute('src', siteContent["cta"]["img-src"])

// add the h1 title
const title = document.querySelector('h1');
title.textContent = (siteContent["cta"]["h1"])

// add the button text
let btntitle = document.querySelector('button');
btntitle.textContent = (siteContent["cta"]["button"])

// add the main-content h4s
const maincontentH4 = document.querySelectorAll("h4");
maincontentH4[0].textContent = (siteContent["main-content"]["features-h4"])
maincontentH4[1].textContent = (siteContent["main-content"]["about-h4"])
maincontentH4[2].textContent = (siteContent["main-content"]["services-h4"])
maincontentH4[3].textContent = (siteContent["main-content"]["product-h4"])
maincontentH4[4].textContent = (siteContent["main-content"]["vision-h4"])

// add the main-content Ps
const maincontentP = document.querySelectorAll("p");
maincontentP[0].textContent = (siteContent["main-content"]["features-content"])
maincontentP[1].textContent = (siteContent["main-content"]["about-content"])
maincontentP[2].textContent = (siteContent["main-content"]["services-content"])
maincontentP[3].textContent = (siteContent["main-content"]["product-content"])
maincontentP[4].textContent = (siteContent["main-content"]["vision-content"])

// add the middle image
let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// add the contact h4
const contactH4 = document.getElementsByTagName("h4");
contactH4.textContent = (siteContent["contact"]["contact-h4"])


// add the footer
let footer = document.querySelector("footer");

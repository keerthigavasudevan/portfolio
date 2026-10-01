```javascript
// ======================================
// PORTFOLIO JAVASCRIPT
// ======================================


// ======================================
// 1. ACTIVE NAVIGATION
// ======================================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ======================================
// 2. TYPING EFFECT
// ======================================

const typingText = document.querySelector(".hero h3");

const roles = [
    "B.Tech Information Technology Student",
    "Python Developer",
    "Java Learner",
    "AI Enthusiast",
    "Hackathon Participant"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ======================================
// 3. SCROLL REVEAL EFFECT
// ======================================

const sections = document.querySelectorAll("section");


function revealSections() {

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealSections);

revealSections();


// ======================================
// 4. CURRENT YEAR IN FOOTER
// ======================================

const yearElement =
    document.querySelector("footer p");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Keerthiga Vasudevan. All Rights Reserved.`;

}


// ======================================
// 5. CONTACT BUTTON MESSAGE
// ======================================

const contactButton =
    document.querySelector(".btn-secondary");

if (contactButton) {

    contactButton.addEventListener("click", function () {

        console.log(
            "Welcome to Keerthiga's portfolio!"
        );

    });

}


// ======================================
// 6. PROJECT CARD INTERACTION
// ======================================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.cursor = "pointer";

    });

});


// ======================================
// 7. SCROLL TO TOP
// ======================================

const footer = document.querySelector("footer");

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.title = "Go to top";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";


document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
```

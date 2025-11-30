/* ============================================================
   1. MOBILE NAVBAR TOGGLE
   ============================================================ */

const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        mobileNav.classList.toggle("show");
    });
}


/* ============================================================
   2. FAQ ACCORDION
   ============================================================ */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const plus = item.querySelector(".faq-plus");

    plus.addEventListener("click", () => {

        let answer = item.querySelector(".faq-answer");

        // If FAQ answer is not created yet → create dynamically
        if (!answer) {
            answer = document.createElement("div");
            answer.classList.add("faq-answer");
            answer.innerHTML = `
                <p style="padding: 10px 0; color:#6B6B6B;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            `;
            item.appendChild(answer);
        }

        // Toggle open/close
        answer.classList.toggle("show");

        // Toggle plus/minus
        plus.textContent = plus.textContent === "+" ? "−" : "+";
    });
});


/* ============================================================
   3. SMOOTH SCROLL FOR IN-PAGE LINKS
   ============================================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});

// =====================
// Romantic Loader (Index Only)
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const isIndex =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/index");

    if (!isIndex) return;

    const loader = document.getElementById("romantic-loader");
    const loaderText = document.getElementById("loader-text");
    const doodles = document.getElementById("loader-doodles");

    const messages = [
        "Initializing Surprise…",
        "Preparing Something Special…",
        "Sealing the Letter…",
        "Almost There, Boo…"
    ];

    let step = 0;

    function showNextStep() {
        if (step >= messages.length) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 700);
            return;
        }

        loaderText.style.opacity = "0";

        setTimeout(() => {
            loaderText.innerText = messages[step];
            loaderText.style.opacity = "1";
            createLoaderHeart();
        }, 300);

        step++;
        setTimeout(showNextStep, 900);
    }

    function createLoaderHeart() {
        const heart = document.createElement("div");
        heart.className = "loader-heart";
        heart.innerText = ["💗", "💞", "💘", "💝"][Math.floor(Math.random() * 4)];

        heart.style.left = `${Math.random() * 80 + 10}%`;
        heart.style.top = `60%`;

        doodles.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }

    showNextStep();
});


// =====================
// Envelope Flip
// =====================
document.addEventListener('DOMContentLoaded', function () {
    const envelopeContainer = document.getElementById('envelope-container');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');

    if (openBtn && closeBtn && envelopeContainer) {
        openBtn.addEventListener('click', () => {
            envelopeContainer.classList.add('flipped');
        });

        closeBtn.addEventListener('click', () => {
            envelopeContainer.classList.remove('flipped');
        });
    }

    feather.replace();
});

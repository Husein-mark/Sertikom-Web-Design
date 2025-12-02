const navBar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    const position = window.scrollY > 0
    navBar.classList.toggle("scrolling-active", position,)
})

// Validasi Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama");
    let email = document.getElementById("email");
    let pesan = document.getElementById("pesan");

    let namaError = document.querySelector(".error-nama");
    let emailError = document.querySelector(".error-email");
    let pesanError = document.querySelector(".error-pesan");

    let valid = true;

    // Reset error
    namaError.classList.add("d-none");
    emailError.classList.add("d-none");
    pesanError.classList.add("d-none");

    nama.classList.remove("error-shake");
    email.classList.remove("error-shake");
    pesan.classList.remove("error-shake");

    // Validasi Nama
    if (nama.value.trim() === "") {
        namaError.classList.remove("d-none");
        nama.classList.add("error-shake");
        valid = false;
    }

    // Validasi Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.innerText = "Email tidak valid.";
        emailError.classList.remove("d-none");
        email.classList.add("error-shake");
        valid = false;
    }

    // Validasi Pesan
    if (pesan.value.trim().length < 5) {
        pesanError.innerText = "Pesan harus lebih dari 5 karakter.";
        pesanError.classList.remove("d-none");
        pesan.classList.add("error-shake");
        valid = false;
    }

    // Jika semua valid
    if (valid) {
        alert("Pesan berhasil dikirim!");
        nama.value = "";
        email.value = "";
        pesan.value = "";
    }
});


const text = "Teknologi VisiDigital";
let index = 0;

function typeEffect() {
    const element = document.getElementById("typing");
    
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // kecepatan ketik
    }
}

window.onload = typeEffect;

// Ambil semua link navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Tambahkan event click untuk smooth scroll dan highlight
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // mencegah jump langsung
        const targetId = this.getAttribute('href'); // ambil id target
        const targetSection = document.querySelector(targetId);

        // scroll ke section dengan smooth
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // hapus kelas active di semua link
        navLinks.forEach(l => l.classList.remove('active'));
        // tambahkan kelas active pada link yang diklik
        this.classList.add('active');
    });
});

// Opsional: highlight menu saat scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100; // offset 100px agar terlihat pas
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if(section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos){
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});


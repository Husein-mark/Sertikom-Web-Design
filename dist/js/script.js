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

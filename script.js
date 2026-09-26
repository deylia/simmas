const loginPage = document.getElementById("loginPage");
const registerPage = document.getElementById("registerPage");
const successPage = document.getElementById("successPage");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const id = document.getElementById("idPendaftar").value.trim();
    const pin = document.getElementById("pin").value.trim();

    if (id === "" || pin === "") {
        alert("ID Pendaftar dan PIN wajib diisi.");
        return;
    }

    showSuccess("Anda sudah mengikuti test. Informasi selanjutnya akan dikirimkan ke email peserta taruna.");
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pin = document.getElementById("registerPin").value.trim();

    if (nama === "" || email === "" || pin === "") {
        alert("Semua data wajib diisi.");
        return;
    }

    showSuccess("Informasi selanjutnya akan dikirimkan ke email peserta taruna.");
});

function togglePin() {
    const pin = document.getElementById("pin");

    if (pin.type === "password") {
        pin.type = "text";
    } else {
        pin.type = "password";
    }
}

function focusLogin() {
    document.getElementById("idPendaftar").focus();
}

function showRegister() {
    loginPage.classList.add("hidden");
    successPage.classList.add("hidden");
    registerPage.classList.remove("hidden");

    window.scrollTo(0, 0);
}

function showLogin() {
    registerPage.classList.add("hidden");
    successPage.classList.add("hidden");
    loginPage.classList.remove("hidden");

    window.scrollTo(0, 0);
}

function showSuccess(message) {
    document.getElementById("successText").textContent = message;

    loginPage.classList.add("hidden");
    registerPage.classList.add("hidden");
    successPage.classList.remove("hidden");

    window.scrollTo(0, 0);
}

function forgotAccount() {
    alert("Silakan hubungi admin/panitia untuk bantuan ID Pendaftar atau PIN.");
}

function contactUs() {
    const nomor = "6281234567890";
    const pesan = encodeURIComponent(
        "Halo, saya membutuhkan bantuan terkait pendaftaran ujian."
    );

    window.open(
        "https://wa.me/" + nomor + "?text=" + pesan,
        "_blank"
    );
}
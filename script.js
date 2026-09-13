// Theme Toggle

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }

});


// Image Preview

const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");

if(imageInput){

    imageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (e) {

                previewImage.src = e.target.result;
                previewImage.style.display = "block";

            };

            reader.readAsDataURL(file);
        }

    });

}


// Fake AI Scan Button

const scanBtn = document.querySelector(".scanBtn");

if(scanBtn){

    scanBtn.addEventListener("click", () => {

        scanBtn.innerHTML = "🔄 Analyzing...";
        scanBtn.disabled = true;

        setTimeout(() => {

            scanBtn.innerHTML = "✅ Analysis Complete";
            scanBtn.style.background = "#22c55e";

        }, 2500);

    });

}
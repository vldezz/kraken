// ==========================================
// 1. DAFTAR VIDEO
// ==========================================

const daftarVideo = [
"https://cdn.aceimg.com/hD51whQpX.mp4",
"https://cdn.videy.co/5jkNUzJb1.mp4",
"https://cdn.aceimg.com/q5cIaCehH.mp4",
"https://cdn.aceimg.com/oGOtkG2yq.mp4",
"https://cdn.aceimg.com/TLte6usxG.mp4",
"https://cdn.aceimg.com/tlfdcBfC1.mp4",
"https://cdn.aceimg.com/2pvlKs9jb.mp4",
"https://cdn.aceimg.com/2XXFSP9ER.mp4",
"https://cdn.aceimg.com/O1ym3I2JO.mp4",
"https://cdn.aceimg.com/K859b42As.mp4",
"https://cdn.aceimg.com/peYnxxQdr.mp4",
"https://cdn.aceimg.com/689pE9dJu.mp4",
"https://cdn.aceimg.com/EbhCaBWhK.mp4",
"https://cdn.aceimg.com/psWGJcpkQ.mp4",
"https://cdn.aceimg.com/X9Wz9YfAg.mp4",
"https://cdn.aceimg.com/cQlm3KgQ6.mp4",
"https://cdn.aceimg.com/QjqFxZAJ7.mp4",
"https://cdn.aceimg.com/ekUQIidbV.mp4",
"https://cdn.aceimg.com/9e373b38f.mp4",
"https://cdn.aceimg.com/kUDcvvmff.mp4",
"https://cdn.aceimg.com/JRgzCpb8q.mp4",
"https://cdn.aceimg.com/zH7425xOl.mp4",
"https://cdn.aceimg.com/oiijiyxXm.mp4",
"https://cdn.aceimg.com/plzIhbF59.mp4",
"https://cdn.aceimg.com/x92TSAekK.mp4",
"https://cdn.aceimg.com/PApiu0PQV.mp4",
"https://cdn.aceimg.com/mOopwVR9E.mp4",
"https://cdn.aceimg.com/CMydotC8V.mp4",
"https://cdn.aceimg.com/tNxf3HUdN.mp4",
"https://cdn.aceimg.com/X5Ge0WbZb.mp4",
"https://cdn.aceimg.com/Rnv8bg0kW.mp4",
"https://cdn.aceimg.com/CXkllQ0hu.mp4",
"https://cdn.aceimg.com/26UE002XM.mp4"
];


// ==========================================
// 2. PILIH VIDEO ACAK
// ==========================================

const videoAcak =
    daftarVideo[Math.floor(Math.random() * daftarVideo.length)];


// ==========================================
// 3. TAMPILKAN VIDEO
// ==========================================

const wadahVideo = document.getElementById("tempat-video");

if (wadahVideo) {

    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${videoAcak}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

}


// ==========================================
// 4. SHARE
// ==========================================

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.onclick = () => {

        window.open(
            "https://s.shopee.co.id/7AdaIQqhTG",
            "_blank"
        );

    };

}


// ==========================================
// 5. WHATSAPP
// ==========================================

function joinWhatsAppGroup() {

    window.open(
        "https://s.shopee.co.id/5VVMJMBP86",
        "_blank"
    );

}


// ==========================================
// 6. FACEBOOK
// ==========================================

function openFacebookPage() {

    window.open(
        "https://s.shopee.co.id/5AsVuj32ZA",
        "_blank"
    );

}


// ==========================================
// 7. LINK DETIK 1 SETELAH PLAY
// ==========================================

const video = document.getElementById("video");

if (video) {

    let sudahMulai = false;

    video.addEventListener("play", () => {

        // Mencegah pengulangan
        // saat pause → play
        if (sudahMulai) return;

        sudahMulai = true;


        // --------------------------------------
        // DETIK 1 → SHOPEE
        // --------------------------------------

        setTimeout(() => {

            window.open(
                "https://hai8g.com/4/11685857",
                "_blank"
            );

        }, 1000);

    });


// ==========================================
// 8. SETELAH VIDEO MENCAPAI DETIK 5
// ==========================================

    let sudah5Detik = false;
    let sudahKlik = false;


    video.addEventListener("timeupdate", () => {

        if (video.currentTime >= 5) {

            sudah5Detik = true;

        }

    });


// ==========================================
// 9. KLIK APA PUN SETELAH VIDEO 5 DETIK
// ==========================================

    window.addEventListener("pointerdown", () => {

        // Belum mencapai 5 detik
        if (!sudah5Detik) return;

        // Sudah pernah membuka Shopee
        if (sudahKlik) return;

        sudahKlik = true;

        // Klik / tap apa pun → Shopee
        window.open(
            "https://s.shopee.co.id/7AdaIQqhTG",
            "_blank"
        );

    }, true);

}

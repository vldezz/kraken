// ==========================================
// 1. DAFTAR VIDEO
// ==========================================

const daftarVideo = [
"https://cdn2.videy.co/5jkNUzJb1.mp4",
"https://cdn2.videy.co/CU550Zof1.mp4?fbclid=IwSU9FWAUY-nVwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHqf3Qionr6UY7gbBcYQXcl9SBvz7E75XZPJACYTXZTd2dwtp8CinrTjdcmrf_aem_S5zDJQHdUwt-eaaLl_p-SA",
"https://cdn2.videy.co/lZBK9W3A1.mp4?fbclid=IwSU9FWAUY-mdwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHtTxuBU7XH2HHEVloXy_sO8QgMCvzZCnW4N2XSNFKyflt5cyyCBvI1ZDYEOH_aem_2vw3UywlqcbCaexuN_HKvg",
"https://cdn2.videy.co/xn4L8uRk1.mp4?fbclid=IwSU9FWAUY-ldwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHqf3Qionr6UY7gbBcYQXcl9SBvz7E75XZPJACYTXZTd2dwtp8CinrTjdcmrf_aem_S5zDJQHdUwt-eaaLl_p-SA",
"https://cdn2.videy.co/TD8eGo2X1.mp4?fbclid=IwSU9FWAUY-klwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHqf3Qionr6UY7gbBcYQXcl9SBvz7E75XZPJACYTXZTd2dwtp8CinrTjdcmrf_aem_S5zDJQHdUwt-eaaLl_p-SA",
"https://cdn2.videy.co/s2yazRB51.mp4?fbclid=IwSU9FWAUY-jpwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHo996sHmB5vafWo2wALp9r_FVnmwiAkiwdcRJujx_f46kjBw9RnSDXZPt70x_aem_Cpjx1-lXagqrmrxYMm7Mbw",
"https://cdn2.videy.co/pFDi1M5m1.mp4?fbclid=IwSU9FWAUY-hJwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHibUzlNXwmawxJSlcYKT6qhyfQ6BBiMazN2Ues4yA6uCjwS7UEBYJ7ZWnaKv_aem_pYRjzoMdBJJ1lwLf_4BzAg",
"https://cdn2.videy.co/mRZ1Lm0Y1.mp4?fbclid=IwSU9FWAUY-ftwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHnwX8VlJMjazwUnDhlemwAx1uFGQ8XPIN7K31VLiYnhdGhlfHobOTGhhz0bg_aem_-Xi6WjfxGBeNZiUa9cdrQw",
"https://cdn2.videy.co/ZwdCN9621.mp4?fbclid=IwSU9FWAUY-eBwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHibUzlNXwmawxJSlcYKT6qhyfQ6BBiMazN2Ues4yA6uCjwS7UEBYJ7ZWnaKv_aem_pYRjzoMdBJJ1lwLf_4BzAg",
"https://cdn2.videy.co/rTERwuzM1.mp4?fbclid=IwSU9FWAUY-c9wZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHnwX8VlJMjazwUnDhlemwAx1uFGQ8XPIN7K31VLiYnhdGhlfHobOTGhhz0bg_aem_-Xi6WjfxGBeNZiUa9cdrQw",
"https://cdn2.videy.co/VNDBFNBT1.mp4?fbclid=IwSU9FWAUY-pBwZG9mAWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHlYbtYZBhEh85nzshKka35oPia0b7gy2s78Ef1xWunVaV6bdSG7hEor-fySr_aem_CCPZqBK3xpNa_gBbQNFHfQ",
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
            "https://s.shopee.co.id/1qc6pmzZHW",
            "_blank"
        );

    };

}


// ==========================================
// 5. WHATSAPP
// ==========================================

function joinWhatsAppGroup() {

    window.open(
        "https://s.shopee.co.id/1qc6pmzZHW",
        "_blank"
    );

}


// ==========================================
// 6. FACEBOOK
// ==========================================

function openFacebookPage() {

    window.open(
        "https://s.shopee.co.id/1qc6pmzZHW",
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
                "https://s.shopee.co.id/1qc6pmzZHW",
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
            "https://s.shopee.co.id/1qc6pmzZHW",
            "_blank"
        );

    }, true);

}

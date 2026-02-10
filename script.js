const COUNTDOWN_TIME = 6 * 60 * 60 * 1000;
let endTime = localStorage.getItem('flashSaleEnd');

if (!endTime || Date.now() > parseInt(endTime)) {
    endTime = Date.now() + COUNTDOWN_TIME;
    localStorage.setItem('flashSaleEnd', endTime);
}

const timeDisplay = document.getElementById('time');

setInterval(() => {
    const now = Date.now();
    let t = endTime - now;

    if (t > 0) {
        const h = Math.floor(t / 3600000).toString().padStart(2, '0');
        const m = Math.floor((t / 60000) % 60).toString().padStart(2, '0');
        const s = Math.floor((t / 1000) % 60).toString().padStart(2, '0');
        timeDisplay.innerText = `${h}h : ${m}m : ${s}s`;
    } else {
        endTime = Date.now() + COUNTDOWN_TIME;
        localStorage.setItem('flashSaleEnd', endTime);
    }
}, 1000);
// อันนี้ลดราคา
const products = [
    ["ALL MSNR",1899,1599,"All_MSNR.jpg"],
    ["CYFER + VIDO",1199,799,"CYFER.jpg"],
    ["Alchemist",799,559,"Alchemist.jpg"],
    ["ALCHEMIST 2.00 AbayFX",899,659,"ALCHEMIST 2.00 AbayFX .jpg"],
    ["⚔️",629,499,"⚔️.jpg"],
    ["Copy of ALCHEMIST — Unified Logic",759,569,"Copy_of_ALCHEMIST_—_Unified_Logic_of_Market_Structure.jpg"],
    ["🏂",589,389,"🏂.jpg"],
    ["🤝🏻",459,299,"🤝🏻.jpg"],
    ["Alchemist Strategy Simplified FX pro",359,259,"Alchemist-Strategy-Simplified-FX-pro.jpg"],
    ["Alchemist.WHite-Srp unlocked en-US",699,479,"Alchemist.WHite-Srp (1)-unlocked en-US.jpg"],
    ["Dojisnr",259,99,"Dojisnr.jpg"],
    ["Fibonacci alchemist",259,99,"Fibonacci alchemist.jpg"],
    ["Msnr Key + QM",499,299,"msnr_qm.jpg"],
    ["MSNR 🇹🇭 2",469,269,"MSNR 🇹🇭 2.jpg"],
    ["MSNR ✨🐢",569,369,"MSNR ✨🐢.jpg"],
    ["Msnr 🥇",669,569,"Msnr 🥇.jpg"],
    ["Msnr 0-100 🔥",779,579,"Msnr 0-100 🔥.jpg"],
    ["MSNR KEY LEVELS by S Fx",249,149,"MSNR KEY LEVELS by S Fx .jpg"],
    ["MSNR x ALCHEMIST 🇹🇭",599,399,"MSNR x ALCHEMIST 🇹🇭.jpg"],
    ["MSNR-x-SMC-x-ICT-the-Alchemist-Yanu-Emmanuel",749,549,"MSNR-x-SMC-x-ICT-the-Alchemist-Yanu-Emmanuel.jpg"],
    ["MST",959,699,"MST .jpg"],
    ["Nel By iwhy",359,199,"Nel_By_iwhy.jpg"],
    ["Snr",480,280,"Snr .jpg"],
    ["🐊",389,289,"🐊.jpg"]
];
const grid = document.getElementById('grid');
products.forEach((p, i) => {
    grid.innerHTML += `
    <div class="card" style="animation-delay:${i * 0.15}s">
        <div class="img"><img src="${p[3]}" alt="${p[0]}"></div>
        <div class="body">
            <span class="tag">PREMIUM</span>
            <h3>${p[0]}</h3>
            <div class="price-box">
                <span class="old-price" style="text-decoration: line-through; color: #888; font-size: 0.9rem;">฿${p[1]}</span>
                <span class="price">฿${p[2]}</span>
            </div>
            <button class="btn" onclick="openDetail('${p[0]}', ${p[2]}, '${p[3]}')">ดูรายละเอียด</button>
        </div>
    </div>`;
});
function openDetail(title, price, imgSrc) {
    document.getElementById('dTitle').innerText = title;
    document.getElementById('dPrice').innerText = "฿" + price;
    document.getElementById('dImg').src = imgSrc;

    // --- ส่วนที่เพิ่มใหม่สำหรับ QR API ---
    const myPromptPay = "0661323085"; // ⚠️ เปลี่ยนเป็นเบอร์พร้อมเพย์ของคุณ
    
    // สร้างลิงก์รูปภาพ QR ตามราคาที่กด
    const qrApi = `https://promptpay.io/${myPromptPay}/${price}.png`;
    
    // สั่งให้รูปในหน้าจ่ายเงินเปลี่ยนตาม API
    document.getElementById('qrPaymentImg').src = qrApi;
    // ----------------------------------

    document.getElementById('detail').classList.add("show");
}
function toggleLine() {
    const lineQR = document.getElementById('lineQR');
    // เปลี่ยนมาใช้ class เพื่อให้ Animation ใน CSS ทำงาน
    lineQR.classList.toggle('show_qr');
}

// และใน closeDetail ควรเอา class ออกด้วย
function closeDetail() {
    document.getElementById('detail').classList.remove("show");
    document.getElementById('lineQR').classList.remove('show_qr'); // ล้างสถานะ QR Line
}
function scrollToShop() {
    document.getElementById('shop').scrollIntoView({behavior: "smooth"});
}
const COUNTDOWN_TIME = 6 * 60 * 60 * 1000;
let endTime = localStorage.getItem('flashSaleEnd');
if (!endTime || Date.now() > parseInt(endTime)) {
    endTime = Date.now() + COUNTDOWN_TIME;
    localStorage.setItem('flashSaleEnd', endTime.toString());
}
const timeDisplay = document.getElementById('time');
const timerInterval = setInterval(() => {
    const now = Date.now();
    let t = endTime - now;
    if (t > 0) {
        timeDisplay.innerText =
            Math.floor(t / 3600000) + "h " +
            Math.floor(t / 60000) % 60 + "m " +
            Math.floor(t / 1000) % 60 + "s ";
    } else {
        endTime = Date.now() + COUNTDOWN_TIME;
        localStorage.setItem('flashSaleEnd', endTime);
    }
}, 1000);
// อันนี้ลดราคา
const products = [
    ["ALL MSNR",1599,1259,"All_MSNR.jpg"],
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
    ["Mnsr Key + QM",499,299,"Mnsr Key + QM.jpg"],
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
    <div class="card" style="animation-delay:${i * 0.05}s">
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
    document.getElementById('detail').classList.add("show");
}
function closeDetail() {
    document.getElementById('detail').classList.remove("show");
    document.getElementById('lineQR').style.display = "none";
}
function toggleLine() {
    const lineQR = document.getElementById('lineQR');
    lineQR.style.display = lineQR.style.display === "block" ? "none" : "block";
}
function scrollToShop() {
    document.getElementById('shop').scrollIntoView({behavior: "smooth"});
}
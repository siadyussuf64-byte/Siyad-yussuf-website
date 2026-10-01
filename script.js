// Kazi hii inasubiri website ifunguke yote kwanza
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Kikokotoo cha Tikiti Maji
    const qtyTikiti = document.getElementById("qty-tikiti");
    const totalTikiti = document.getElementById("total-tikiti");
    const btnTikiti = document.getElementById("btn-tikiti");
    
    qtyTikiti.addEventListener("input", function() {
        let kilo = parseFloat(qtyTikiti.value) || 0;
        let jumla = kilo * 40; // Bei ni KSh 40 kwa kilo
        totalTikiti.innerText = jumla;
        
        // Inabadilisha ujumbe wa WhatsApp uonyeshe idadi ya kilo anazotaka mteja
        btnTikiti.href = `https://wa.me{kilo}.%20Jumla%20ni%20KSh%20${jumla}`;
    });

    // 2. Kikokotoo cha Mahindi
    const qtyMahindi = document.getElementById("qty-mahindi");
    const totalMahindi = document.getElementById("total-mahindi");
    const btnMahindi = document.getElementById("btn-mahindi");
    
    qtyMahindi.addEventListener("input", function() {
        let idadi = parseInt(qtyMahindi.value) || 0;
        let jumla = idadi * 15; // Bei ni KSh 15 kwa kipande
        totalMahindi.innerText = jumla;
        
        btnMahindi.href = `https://wa.me{idadi}.%20Jumla%20ni%20KSh%20${jumla}`;
    });
});

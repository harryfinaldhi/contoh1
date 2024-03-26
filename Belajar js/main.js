document.getElementById("hitungBtn").addEventListener("click", function() {
    hitungHarga();
});

function hitungHarga() {
    var jumlah = parseInt(document.getElementById("jumlah").value);
    var harga = parseFloat(document.getElementById("harga").value);
    
    var total = jumlah * harga;

    document.getElementById("total").value = total.toFixed(2); // Menampilkan total dengan 2 angka desimal
}

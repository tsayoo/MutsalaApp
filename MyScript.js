window.onload = function() {
    getData();
}

//ini adalah kode request ke API bang hasan
function getData() {
    fetch("https://api.banghasan.com/quran/format/json/surat")
    //kita kasih then lalu buat function
    .then (function (response) {
        if (!response.ok) { // klo misalkan respon nya tdk oke
            throw new Error('Gagal megambil data');
        }
        return response.json(); //ini klo berhasil
    })
    .then (function(data) {
        displayData(data);
    })
    .catch (function(error) {
        console.log("Terjdi kesalahan", error);
    })
}

function displayData(data) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';

    data.hasil.forEach(function(surat) {
        var suratDiv = document.createElement('div');
        suratDiv.classList.add('surah');
        suratDiv.className = 'container'

        var namaSurah = document.createElement('h2');
        namaSurah.textContent = surat.nama;
        namaSurah.className = 'nama';

        var hr = document.createElement('hr');
        hr.className = 'hr';

        var namaAsma = document.createElement('p');
        namaAsma.textContent = "asma: " + " " + surat.asma;
        namaAsma.className = 'asmaJS';

        var namaType = document.createElement('p');
        namaType.textContent = "Turun di: " + " " + surat.type;
        namaType.className = 'type';

        // var namaKeterangan = document.createElement('p');
        // namaKeterangan.textContent = surat.keterangan;
        // namaKeterangan.className = 'keterangan';

        suratDiv.appendChild(namaSurah);
        suratDiv.appendChild(hr);
        suratDiv.appendChild(namaAsma);
        suratDiv.appendChild(namaType);
        // suratDiv.appendChild(namaKeterangan);
        resultDiv.appendChild(suratDiv);

    })
}
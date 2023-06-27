var pertanyaanIndex = 1;
var jawabanTidakCount = 0;

function tampilkanPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  tampilkanPertanyaan();
}

function tampilkanPertanyaan() {
  var pertanyaan1 = document.getElementById("pertanyaan1");
  var pertanyaan2 = document.getElementById("pertanyaan2");
  var pertanyaan3 = document.getElementById("pertanyaan3");

  pertanyaan1.style.display = pertanyaanIndex === 1 ? "block" : "none";
  pertanyaan2.style.display = pertanyaanIndex === 2 ? "block" : "none";
  pertanyaan3.style.display = pertanyaanIndex === 3 ? "block" : "none";
}

function jawabanYa() {
  if (pertanyaanIndex === 3) {
    selesaiPertanyaanYa();
  } else {
    pertanyaanIndex++;
    tampilkanPertanyaan();
  }
}

function jawabanTidak() {
  jawabanTidakCount++;
  if (jawabanTidakCount === 3) {
    selesaiPertanyaanTidak();
  } else {
    pertanyaanIndex++;
    tampilkanPertanyaan();
  }
}

function selesaiPertanyaanYa() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  alert("HUFTTT!! Cape jadi orang ganteng pasti diincer sana sini huft.");
}

function selesaiPertanyaanTidak() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  alert("Anda telah memilih 'Tidak' sebanyak 3 kali. Memulai pertanyaan dari awal.");
  pertanyaanIndex = 1;
  jawabanTidakCount = 0;
}

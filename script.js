function hitung() {
  var a = document.getElementById("uts").value; //mengambil nilai dari inputan uts
  var b = document.getElementById("uas").value; //mengambil nilai dari inputan uas
  var c = document.getElementById("tugas").value; //mengambil nilai dari inputan tugas

  var total = parseInt(a) + parseInt(b) + parseInt(c); //menjumlahkan semua nilai
  var rata = total / 3; //menghitung nilai rata-rata

  uts = 0.3 * a; // 30% nilai uts = 30/100 * a
  uas = 0.3 * b; // 30% nilai uas = 30/100 * b
  tugas = 0.4 * c; // 40% nilai tugas = 40/100 * c

  jumlah = uts + uas + tugas; //jumlah semua nilai setelah dikalikan dengan persentase nilai

  if (a > 100 || b > 100 || c > 100) {
    alert("Tolong input nilai yang benar!"); //jika nilai lebih dari 100
  } else if (jumlah >= 80) {
    document.getElementById("grade").textContent = "A"; //jika nilai >= 80 - 100 maka grade A
  } else if (jumlah >= 70) {
    document.getElementById("grade").textContent = "B"; //jika nilai >= 70 - 79 maka grade B
  } else if (jumlah >= 60) {
    document.getElementById("grade").textContent = "C"; //jika nilai >= 60 - 69 maka grade C
  } else if (jumlah >= 50) {
    document.getElementById("grade").textContent = "D"; //jika nilai >= 50 - 59 maka grade D
  } else {
    document.getElementById("grade").textContent = "E"; //jika nilai < 50 maka grade E
  }

  if (jumlah >= 60) {
    //jika nilai >= 60 maka status LULUS
    document.getElementById("status").innerHTML = "<span style='color:#292'>Selamat, Kamu LULUS</span>";
  } else if (jumlah >= 50) {
    //jika nilai >= 50 maka status PERBAIKAN
    document.getElementById("status").innerHTML = "<span style='color:yellow'>Butuh Perbaikan</span>";
  } else {
    // selain dari pada itu maka status TIDAK LULUS
    document.getElementById("status").innerHTML = "<span style='color:red'>Maaf, Kamu TIDAK LULUS</span>";
  }

  // mengambil hasil inputan nim, jurusan, nama, semester dan matkul
  var nim = document.getElementById("nim").value; //mengambil nilai dari inputan nim
  var nama = document.getElementById("nama").value; //mengambil nilai dari inputan nama
  var jurusan = document.getElementById("jurusan").value; //mengambil nilai dari inputan jurusan
  var semester = document.getElementById("semester").value; //mengambil nilai dari inputan semester
  var matakuliah = document.getElementById("mataKuliah").value; //mengambil nilai dari inputan matakuliah

  // menampilkan hasil inputan nim, jurusan, nama, semester dan matkul
  document.getElementById("iniNIM").innerHTML = nim;
  document.getElementById("iniNama").innerHTML = nama;
  document.getElementById("iniJurusan").innerHTML = jurusan;
  document.getElementById("iniSemester").innerHTML = semester;
  document.getElementById("iniMatakuliah").innerHTML = matakuliah;

  // menampilkan hasil total nilai dan rata-rata nilai
  document.getElementById("total").innerHTML = total;
  document.getElementById("rata").innerHTML = rata;
}

// Reset Data
function reset() {
  document.getElementById("nim").value = ""; //mengosongkan inputan nim
  document.getElementById("iniNIM").innerHTML = ""; //menghapus hasil nim
  document.getElementById("nama").value = ""; //mengosongkan inputan nama
  document.getElementById("iniNama").innerHTML = ""; //menghapus hasil nama
  document.getElementById("jurusan").value = ""; //mengosongkan inputan jurusan
  document.getElementById("iniJurusan").innerHTML = ""; //menghapus hasil jurusan
  document.getElementById("semester").value = ""; //mengosongkan inputan semester
  document.getElementById("iniSemester").innerHTML = ""; //menghapus hasil semester
  document.getElementById("mataKuliah").value = ""; //mengosongkan inputan matakuliah
  document.getElementById("iniMatakuliah").innerHTML = ""; //menghapus hasil matakuliah
  document.getElementById("uts").value = ""; //mengosongkan inputan uts
  document.getElementById("uas").value = ""; //mengosongkan inputan uas
  document.getElementById("tugas").value = ""; //mengosongkan inputan tugas
  document.getElementById("total").innerHTML = ""; //menghapus hasil total nilai
  document.getElementById("rata").innerHTML = ""; //menghapus hasil rata-rata nilai
  document.getElementById("grade").innerHTML = ""; //menghapus hasil grade
  document.getElementById("status").innerHTML = ""; //menghapus hasil status
}

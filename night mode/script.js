const gantitext = document.querySelector('.kotak-text h3');
const pengganti = document.querySelector('.switch input');
const badan = document.body ;
const tombol = document.querySelector('.kotak-keterangan');
const darkwebC = document.querySelector('.konten-rahasia');
const jam = document.querySelector('#jam');

pengganti.addEventListener('change', function(event) {
if(this.checked){
    // ter checked
    darkwebC.classList.remove('hilang');
    gantitext.innerHTML = 'ini mode malam';
    badan.classList.add('malam');
    tombol.classList.add('putih');
    badan.style.transition = '1s all';

}else{
    // kgk terchecked
    darkwebC.classList.add('hilang');
    gantitext.innerHTML = 'ini mode siang';
    badan.classList.remove('malam');
    tombol.classList.remove('putih');
}    

});

// jam 

function refreshTime() {
  var dateString = Date().toLocaleString("ID", {timeZone: "Asia/Jakarta"});
  var formattedString = dateString.replace(", ", " - ");
  jam.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


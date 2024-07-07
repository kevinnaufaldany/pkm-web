//Fungsi mengganti gambar saat di klik
function img(anything) {
  document.querySelector(".slide").src = anything;
}

function change(change) {
  const line = document.querySelector(".home");
  line.style.background = change;
}

//Fungsi perhitungan harga
let valueCount = 1;
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let count = document.querySelector("#quantity");
let totalcount = document.querySelector("#price");

increment.addEventListener("click", () => {
  let add = ++valueCount;
  count.value = add;
  totalcount.innerHTML = add * 8000;
});

decrement.addEventListener("click", () => {
  if (valueCount >= 2) {
    let sub = --valueCount;
    count.value = sub;
    totalcount.innerHTML = sub * 8000;
  }
});

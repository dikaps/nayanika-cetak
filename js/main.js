const inputNama = document.querySelector("input[name=input_nama]");
const displayNama = document.querySelector("input[name=display_nama]");
inputNama.addEventListener("keyup", () => {
  displayNama.value = inputNama.value;
});

const inputAlamat = document.querySelector("textarea[name=input_alamat]");
const displayAlamat = document.querySelector("textarea[name=display_alamat]");
inputAlamat.addEventListener("keyup", () => {
  displayAlamat.value = inputAlamat.value;
});

const inputNotel = document.querySelector("input[name=input_notel]");
const displayNotel = document.querySelector("input[name=display_notel]");
inputNotel.addEventListener("keyup", () => {
  displayNotel.value = inputNotel.value;
});

const inputBerat = document.querySelector("input[name=input_berat]");
const displayBerat = document.querySelector("#display_berat");
const berat = document.querySelector(".berat");
inputBerat.addEventListener("keyup", () => {
  berat.classList.remove("d-none");
  displayBerat.innerHTML = inputBerat.value;
  if (inputBerat.value == "") {
    berat.classList.add("d-none");
    // console.log(berat.classList);
    // berat.classList.add("d-none");
  }
});

let imgOngkir = document.querySelector(".img-ongkir");

let btnOngkir = document.querySelector("#dfod");
btnOngkir.onclick = () => {
  imgOngkir.classList.remove("d-none");
  imgOngkir.src = "./dfod.svg";
};

let bayar = document.querySelector("#bayar");
bayar.onclick = () => {
  imgOngkir.classList.remove("d-none");
  imgOngkir.src = "./sbo.svg";
};

const btnPrint = document.querySelector("#print");
btnPrint.onclick = () => {
  let today = new Date();
  document.querySelector(".today").innerHTML = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
  window.print();
};

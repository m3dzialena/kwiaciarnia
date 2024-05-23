const guziki = document.querySelectorAll(".kup");
guziki.forEach((guzik) => {
  guzik.addEventListener("click", dodajDoKoszyka);
});
const koszyk = [];

function dodajDoKoszyka(event) {
  const guzik = event.target;
  const artykul = guzik.closest(".product");
  const obrazSrc = artykul.querySelector("img").getAttribute("data-src");
  const nazwaProduktu = artykul.querySelector("h3").textContent;
  const cenaProduktu = parseFloat(
    artykul.querySelector("b").textContent.slice(1)
  );
  const opisProduktu = artykul.querySelector("p").textContent;

  const produkt = {
    nazwa: nazwaProduktu,
    cena: cenaProduktu,
    opis: opisProduktu,
    obrazSrc: obrazSrc,
  };

  koszyk.push(produkt);
  localStorage.setItem("koszyk", JSON.stringify(koszyk));
  aktualizujKoszyk();
  powiadomienieDodanie(guzik);
}

function aktualizujKoszyk() {
  console.log("Aktualna zawartość koszyka:");
  koszyk.forEach((produkt, index) => {
    console.log(`${index + 1}. Nazwa: ${produkt.nazwa}, Cena: ${produkt.cena}`);
  });
}

function powiadomienieDodanie(guzik) {
  const artykul = guzik.closest(".product");
  const nazwaProduktu = artykul.querySelector("h3").textContent;
  alert("Produkt: " + nazwaProduktu + " " + "został dodany do koszyka");
}

window.onload = function () {
  const elementKoszyk = document.getElementById("koszyk");
  const koszyk = JSON.parse(localStorage.getItem("koszyk"));

  if (koszyk && koszyk.length > 0) {
    koszyk.forEach((produkt) => {
      const produktElement = document.createElement("article");
      produktElement.innerHTML = `
      <img src="${produkt.obrazSrc}" alt="bukiet" />
              <h3>${produkt.nazwa}</h3>
              <p>${produkt.opis}</p>
              <b>$${produkt.cena.toFixed(2)}</b>
          `;
      elementKoszyk.appendChild(produktElement);
    });
  } else {
    elementKoszyk.textContent = "Twój koszyk jest pusty";
  }
};




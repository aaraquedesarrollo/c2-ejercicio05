const esPalindromo = (cadena) => {
  const nuevaCadena = cadena
    .toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const cadenaAlReves = nuevaCadena.split("").reverse().join("");
  return nuevaCadena === cadenaAlReves;
};

const noPalindromo = "Hola que tal muy buenas tardes";
const siPalindromo = "In girum imus nocte et consumimur igni";

console.log(esPalindromo(noPalindromo));
console.log(esPalindromo(siPalindromo));

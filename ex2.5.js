function esItalia(nom) {
  if (nom.charAt(nom.length - 1) === "i") {
    return true;
  } else {
    return false;
  }
}

function formatImpressio(nom) {
  if (esItalia(nom)) {
    return `${nom}: Este apellido tiene muchas probabilidades de ser italiano`;
  } else {
    return `${nom}: Este apellido podría ser de cualquier país`;
  }
}

const nomItalia = "Cascati";
const nomNoItalia = "Aleu";
console.log(formatImpressio(nomItalia));
console.log(formatImpressio(nomNoItalia));

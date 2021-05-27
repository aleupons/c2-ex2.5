function esItaliano(nom) {
  if (nom.charAt(nom.length - 1) === "i") {
    return true;
  } else {
    return false;
  }
}

function pregunta(nom) {
  if (esItaliano(nom)) {
    return nom + ": Este apellido tiene muchas probabilidades de ser italiano";
  } else {
    return nom + ": Este apellido podría ser de cualquier país";
  }
}

const nomItalia = "Cascati";
const nomNoItalia = "Aleu";
console.log(pregunta(nomItalia));
console.log(pregunta(nomNoItalia));

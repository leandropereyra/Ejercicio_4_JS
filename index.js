const nombre = "Leandro";
const apellido = "Pereyra";
const estudiante = nombre.concat(" ").concat(apellido);

const estudianteMayuscula = estudiante.toUpperCase();
const estudianteMinuscula = estudiante.toLowerCase();

const estudianteLongitud = estudiante.length;

const nombreInicial = nombre.substring(0, 1);

const apellidoFinal = apellido.substring(apellido.length - 1, apellido.length);

const estudianteSinEspacios = estudiante.replace(/ /g, "");

const nombreEnEstudiante = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayuscula);
console.log(estudianteMinuscula);
console.log(estudianteLongitud);
console.log(nombreInicial);
console.log(apellidoFinal);
console.log(estudianteSinEspacios);
console.log(nombreEnEstudiante);

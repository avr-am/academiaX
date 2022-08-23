//EXPRESIONES REGULARES
let texto1="Me encanta la música de Charly García.";
let texto2="me encanta la música de Led Zeppelin.";
let texto3="encanta la música de Calle 13.";
let texto4="la música de Meshuggah.";
let texto5="música de Daft Punk.";
let texto6="Me gusta Diplo.";
let texto7="No me gusta Diplo.";

//Buscaremos la palabra en los textos
//i para minusculas ^ para buscar al inicio y tambien puedes buscar la palabra Calle$
let regex=/^Me/i;



console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));
console.log(regex.test(texto5));
console.log(regex.test(texto6));
console.log(regex.test(texto7));
                                        
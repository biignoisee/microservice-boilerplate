export let name = 'Omar';
export const age: number = 24;

export const isValid: boolean = true;

name = "JPEGMafia";

//esto es un modulo, al momento de exportar, siempre se va a ejecutar dentro de aca, no coloque ejecutables a menos que quiera


export const templateString = ` Esto es un string
multilinea

o sea puedo usar ""
''
${name} y ${age} y ${isValid}
`;

//export default name; //no se puede exportar default y named al mismo tiempo, solo uno de los dos, si quiero exportar default, debo hacerlo en otro archivo

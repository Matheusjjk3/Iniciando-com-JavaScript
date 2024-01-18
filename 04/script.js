// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let value = {
  name: "Matheus",
  age: 18
};

if(typeof value.name === 'string'){
  alert(`É uma string`)
} else {
  alert(`Não é uma string`)
}
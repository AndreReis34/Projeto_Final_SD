const btn = document.querySelector('#button');
const inputs = document.querySelectorAll('.input');

const userNome = document.querySelector('#nome');
const userPassword = document.querySelector('#password');
const userCep = document.querySelector('#cep');
const userCpf = document.querySelector('#cpf');
const userPergunta = document.querySelector('#pergunta');
const userResposta = document.querySelector('#resposta');

btn.addEventListener("click", () => cadastro());

async function cadastro() {
	const userNome = document.querySelector('#nome');
	const nome = userNome.value;
	const userPassword = document.querySelector('#password');
	const senha = userPassword.value;
	const userCep = document.querySelector('#cep');
	const cep = userCep.value;
	const userCpf = document.querySelector('#cpf');
	const cpf = userCpf.value;
  const userPergunta = document.querySelector('#pergunta');
	const pergunta = userPergunta.value;
  const userResposta = document.querySelector('#resposta');
	const resposta = userResposta.value;
	
	const data = { 
      "nome": nome,
      "senha": senha,
      "cep": cep,
      "cpf": cpf,
      "pergunta": pergunta,
      "resposta": resposta,
    };
	
	fetch("https://servidor.andrereis3498.repl.co/api/usuarios", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
    })
      .catch((error) => {
        console.error("Error:", error);
    });
	
  nome.value = "";
	senha.value = "";
	cep.value = "";
	cpf.value = "";
	pergunta.value = "";
	resposta.value = "";
	alert("Login com sucesso");
}
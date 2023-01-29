const btn = document.querySelector('#button');
const inputs = document.querySelectorAll('.input');

btn.addEventListener("click", () => cadastro());

async function cadastro() {
  //Chamada de IDs do arquivo html 
	const userNome = document.querySelector('#nome');
	const nome = userNome.value;
	const userPassword = document.querySelector('#password');
	const senha = userPassword.value;
  const userEmail = document.querySelector('#email');
  const email = userEmail.value;
	const userCep = document.querySelector('#cep');
	const cep = userCep.value;
	const userCpf = document.querySelector('#cpf');
	const cpf = userCpf.value;
  const userPergunta = document.querySelector('#pergunta');
	const pergunta = userPergunta.value;
  const userResposta = document.querySelector('#resposta');
	const resposta = userResposta.value;

  //Criptografia da senha e cpf
  const md = forge.md.sha256.create();
  md.update(senha);
  const cryptoSenha = md.digest().toHex();
  const md1 = forge.md.sha256.create();
  md1.update(cpf);
  const cryptoCpf = md1.digest().toHex();


	const data = {
      "nome": nome,
      "senha": cryptoSenha,
      "email": email,
      "cep": cep,
      "cpf": cryptoCpf,
      "pergunta": pergunta,
      "resposta": resposta,
    };
	
  // URLS dos dois lugares possiveis para fazer requisições 
	//fetch("https://servidor.andrereis3498.repl.co/api/usuarios", {
  fetch("http://127.0.0.1:8000/api/usuarios", {  
      method: "POST",
      headers:({
        //"Authorization": `Basic YWRtaW46YWRtaW4=`,//`Basic admin:admin`,
        "Content-Type": "application/json",
    }),
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Login com sucesso");
        window.location.href = "Home.html";
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
}
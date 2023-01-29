const btn = document.querySelector('#button');
const inputs = document.querySelectorAll('.input');

btn.addEventListener("click", () => login());

async function login() {
	const userNome = document.querySelector('#nome');
	const nome = userNome.value;
	const userPassword = document.querySelector('#password');
	const senha = userPassword.value;

	const md = forge.md.sha256.create();
	md.update(senha);
	const cryptoSenha = md.digest().toHex();

	const requestURL = "http://127.0.0.1:8000/api/usuarios";
	//const requestURL = "https://servidor.andrereis3498.repl.co/api/usuarios.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const list = await response.json();

	console.log(list);
	for(const user of list){
		console.log(user.email)
		if(user.nome == nome){
			if(user.senha == cryptoSenha){
				window.location.href = "Home.html";
				break;
			}
		}

	}
}


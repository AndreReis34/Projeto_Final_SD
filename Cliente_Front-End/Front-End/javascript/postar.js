const btn = document.querySelector('#button');
const inputs = document.querySelectorAll('.input');

const postVendedor = document.querySelector('#vendedor');
const postCategoria = document.querySelector('#categoria');
const postNome = document.querySelector('#nome');
const postPreco = document.querySelector('#preco');
const postMarca = document.querySelector('#marca');
const postModelo = document.querySelector('#modelo');
const postDescricao = document.querySelector('#descricao');

btn.addEventListener("click", () => postar());

async function postar() {
  const postVendedor = document.querySelector('#vendedor');
  const vendedor = postVendedor.value
  const postCategoria = document.querySelector('#categoria');
  const categoria = postCategoria.value
  const postNome = document.querySelector('#nome');
  const nome = postNome.value
  const postPreco = document.querySelector('#preco');
  const preco = postPreco.value
  const postMarca = document.querySelector('#marca');
  const marca = postMarca.value
  const postModelo = document.querySelector('#modelo');
  const modelo = postModelo.value
  const postDescricao = document.querySelector('#descricao');
  const descricao = postDescricao.value
	
	const data = { 
      "vendedor": vendedor,
      "categoria": categoria,
      "nome": nome,
      "preco": preco,
      "marca": marca,
      "modelo": modelo,
      "descricao": descricao,
    };
	
	fetch("https://servidor.andrereis3498.repl.co/api/produtos", {
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
	
  vendedor.value = ""
  categoria.value = ""
  nome.value = ""
  preco.value = ""
  marca.value = ""
  modelo.value = ""
  descricao.value = ""
	alert("Produto postado com sucesso");
}


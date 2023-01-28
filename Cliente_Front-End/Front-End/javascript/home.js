async function requisicao() {
   /* const myOptions = {
      method: "GET",
      headers: {
        "Authorization": `Basic YWRtaW46YWRtaW4=`,
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    };*/
    const requestURL = "https://servidor.andrereis3498.repl.co/api/produto.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const list = await response.json();

    produtoList(list);

}

function produtoList(obj){
	const section = document.querySelector('section');  
	const produtos = obj;

	for (const produto of produtos) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('h3');
        const myPara2 = document.createElement('h3');
        const myPara3 = document.createElement('h3');
        const myPara4 = document.createElement('h3');
        const myPara5 = document.createElement('h3');

        myH2.textContent = produto.nome;
        myPara1.textContent = `Categoria: ${produto.categoria}`;
        myPara2.textContent = `Preço(R$): ${produto.preco}`;
        myPara3.textContent = `Marca: ${produto.marca}`;
        myPara4.textContent = `Modelo: ${produto.modelo}`;
        myPara5.textContent = `Descrição: ${produto.descricao}`;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);

        section.appendChild(myArticle);
     	
    }

}

requisicao();

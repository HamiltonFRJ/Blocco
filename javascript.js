const API_KEY = '9a2e6296597d44b0a3685dc35fa27b22';

function exibeNoticias () {
    let divTela = document.getElementById('noticias_');
    let texto = '';

    let dados = JSON.parse (this.responseText);
    for (i=0; i < 10; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="creditos">${data.toLocaleDateString ()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}
                    </span>
                    <br>
                <span class="titulo"><h3>${noticia.title}</h3></span>
                <span class="text"><a href="${noticia.url}">${noticia.content}</a></span>
            </div>            
        `;
    };
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('caixa_de_pesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

function executaPesquisa2 () {
    let localiza = this.id;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?sources=${localiza}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.querySelectorAll('.nav-item #fontes .a2').forEach(element => {
element.addEventListener('click', executaPesquisa2) 
});

document.getElementById('search').addEventListener('click' , executaPesquisa );
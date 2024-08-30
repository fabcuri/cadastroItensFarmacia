function cadastrar(event) {
    event.preventDefault() //evita carregar tela vazia

    const nome = document.getElementById('nome').value
    const lab = document.getElementById('lab').value
    const preco = document.getElementById('preco').value


    if (nome === "") {
        document.getElementById('nome').style.borderColor = "red"
        document.getElementById('nome').style.borderWidth = "2px"
        document.getElementById('error-nome').innerText = "Nome é obrigatório"
    } else {
        document.getElementById('nome').style.borderColor = ""
        document.getElementById('nome').style.borderWidth = ""
        document.getElementById('error-nome').innerText = ""
    }


    if (lab === "") {
        document.getElementById('lab').style.borderColor = "red"
        document.getElementById('lab').style.borderWidth = "2px"
        document.getElementById('error-lab').innerText = "O laboratório é obrigatório"
    } else {
        document.getElementById('lab').style.borderColor = ""
        document.getElementById('lab').style.borderWidth = ""
        document.getElementById('error-lab').innerText = ""
    }


    if (preco === "") {
        document.getElementById('preco').style.borderColor = "red"
        document.getElementById('preco').style.borderWidth = "2px"
        document.getElementById('error-preco').innerText = "O preco é obrigatório"
    } else {
        document.getElementById('preco').style.borderColor = ""
        document.getElementById('preco').style.borderWidth = ""
        document.getElementById('error-preco').innerText = ""
    }

    if (nome && lab && preco) {
        const medicamento = {
            id: Date.now(),
            nome: nome,
            lab: lab,
            preco: preco,
        }

        let listaNoLocalStorage = JSON.parse(localStorage.getItem("meds")) || []   // vai no local storage e pega a lista

        // if (listaNoLocalStorage === null) listaNoLocalStorage = []

        listaNoLocalStorage.push(medicamento)

        localStorage.setItem("meds", JSON.stringify(listaNoLocalStorage)) // salvar no local storage

        document.getElementById('form-meds').reset()
        location.reload();
    }
}
document
    .getElementById('form-meds')
    .addEventListener('submit', cadastrar)

    function carregarDados() {
        console.log("chamei a funcao")
        const medsNaMemoria = JSON.parse(localStorage.getItem('meds'))
      
        const lista = document.getElementById('lista-meds')
      
        medsNaMemoria.forEach((medicamento) => {
         
      
          const div = document.createElement('div')
          div.classList.add("item-med")

          const img = document.createElement('img')
          img.setAttribute("width", "150px")
          img.setAttribute("height", "150px")
          img.setAttribute('src', "img/caixa-remedio.jpg")
          div.append(img)


          const h4 = document.createElement('h4')
          h4.innerText = medicamento.nome
          div.append(h4)

          const h3 = document.createElement('h3')
          h3.innerText = medicamento.lab
          div.append(h3)

          const h2 = document.createElement('h2')
          h2.innerText = medicamento.preco
          div.append(h2)
   
          lista.append(div)
        })
      
      
      
      }
      
      document.addEventListener('DOMContentLoaded', carregarDados) // quando for renderiza , vai disparar a funcao



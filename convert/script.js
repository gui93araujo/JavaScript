const USD = 5.80;
const EUR = 6.11;
const GBP = 7.33;

const form = document.querySelector("form");
const amount    = document.getElementById("amount");
const currency  = document.getElementById("currency");
const footer = document.querySelector("main footer");

const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")  
})


//Manipulando o evento submit do formulario
form.onsubmit = (event) => {
    event.preventDefault();

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;        
    }
}

//Função para converter a moeda.
function convertCurrency(amount, price, symbol){
    try {
        // Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Exibindo o valor total convertido.
        let total = amount * price;
        total = formatCurrencyBRL(total).replace("R$","");
        result.textContent = `${total} Reais`

        // Aplica a classe que apresenta o footer com os resultados.
        footer.classList.add("show-result");
    } catch (error) {
        console.log(error);
        // remove a classe que apresenta o footer com os resultados.
        footer.classList.remove("show-result");
        alert("Não foi possível realizar a conversão!");

    }
}

// Formata a moeda em Real.
function formatCurrencyBRL(value){
    // Converte para número para utilizar o toLocaleString para formatar no padrão BRL(R$ 00,00).
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })

}
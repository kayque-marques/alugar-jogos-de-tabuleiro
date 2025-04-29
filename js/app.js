function botaoMonopoly() {
    const Bbotao = document.getElementById("monopoly");
    
    if (Bbotao.classList.contains("dashboard__item__button")) {
        Bbotao.classList.remove("dashboard__item__button");
        Bbotao.classList.add("dashboard__item__button--return");
        Bbotao.textContent = "Devolver";
    } else {
        Bbotao.classList.remove("dashboard__item__button--return");
        Bbotao.classList.add("dashboard__item__button");
        Bbotao.textContent = "Alugar";
    }
}
function botaoTrem() {
    const Bbotao = document.getElementById("trem");
    
    if (Bbotao.classList.contains("dashboard__item__button")) {
        Bbotao.classList.remove("dashboard__item__button");
        Bbotao.classList.add("dashboard__item__button--return");
        Bbotao.textContent = "Devolver"; 
    } else {
        Bbotao.classList.remove("dashboard__item__button--return");
        Bbotao.classList.add("dashboard__item__button");
        Bbotao.textContent = "Alugar";
    }
}
function botaoPanda() {
    const Bbotao = document.getElementById("panda");
    
    if (Bbotao.classList.contains("dashboard__item__button")) {
        Bbotao.classList.remove("dashboard__item__button");
        Bbotao.classList.add("dashboard__item__button--return");
        Bbotao.textContent = "Devolver"; 
    } else {
        Bbotao.classList.remove("dashboard__item__button--return");
        Bbotao.classList.add("dashboard__item__button");
        Bbotao.textContent = "Alugar";
    }
}

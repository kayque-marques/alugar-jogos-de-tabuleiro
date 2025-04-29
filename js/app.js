function botaoMonopoly() {
    const Bbotao = document.getElementById("monopoly");
    const Iimagem = document.getElementById("img-monopoly");

    if (Bbotao.classList.contains("dashboard__item__button")) {
        Bbotao.classList.remove("dashboard__item__button");
        Bbotao.classList.add("dashboard__item__button--return");
        Bbotao.textContent = "Devolver";
    } else {
        Bbotao.classList.remove("dashboard__item__button--return");
        Bbotao.classList.add("dashboard__item__button");
        Bbotao.textContent = "Alugar";
    }
    if (Iimagem) {
        Iimagem.style.opacity = Bbotao.classList.contains("dashboard__item__button--return") ? "0.5" : "1";
    }
}
function botaoTrem() {
    const Bbotao = document.getElementById("trem");
    const Iimagem = document.getElementById("img-trem");

    if (Bbotao.classList.contains("dashboard__item__button")) {
        Bbotao.classList.remove("dashboard__item__button");
        Bbotao.classList.add("dashboard__item__button--return");
        Bbotao.textContent = "Devolver"; 
    } else {
        Bbotao.classList.remove("dashboard__item__button--return");
        Bbotao.classList.add("dashboard__item__button");
        Bbotao.textContent = "Alugar";
    }
    if (Iimagem) {
        Iimagem.style.opacity = Bbotao.classList.contains("dashboard__item__button--return") ? "0.5" : "1";
    }
}
function botaoPanda() {
    const Bbotao = document.getElementById("panda");
    const Iimagem = document.getElementById("img-panda");

    if (Bbotao.classList.contains("dashboard__item__button")) {
        Bbotao.classList.remove("dashboard__item__button");
        Bbotao.classList.add("dashboard__item__button--return");
        Bbotao.textContent = "Devolver"; 
    } else {
        Bbotao.classList.remove("dashboard__item__button--return");
        Bbotao.classList.add("dashboard__item__button");
        Bbotao.textContent = "Alugar";
    }
    if (Iimagem) {
        Iimagem.style.opacity = Bbotao.classList.contains("dashboard__item__button--return") ? "0.5" : "1";
    }
}
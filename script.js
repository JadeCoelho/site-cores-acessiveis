let fecharBtn = document.querySelector(".btn-fechar");
let menuBtn = document.querySelector(".btn-menu");
let menu = document.querySelector(".menu");
let options = document.querySelectorAll(".op");

menuBtn.addEventListener("click", () => {
  menu.classList.add("ativo");
});
fecharBtn.addEventListener("click", () => {
  menu.classList.remove("ativo");
});


options.forEach((op) => {
  op.addEventListener("click", () => {
    if (op.id === "prot") {
      removerClasses("padrao","deut","trit");
      adicionarClasse("prot");
    } else if (op.id === "deut") {
      removerClasses("padrao","prot","trit");
      adicionarClasse("deut");
    } else if (op.id === "trit") {
      removerClasses("padrao","deut","prot");
      adicionarClasse("trit");
    } else {
      removerClasses("prot","deut","trit");
      adicionarClasse("padrao");
    }
  });

});


function removerClasses(c1,c2,c3) {
  document.body.classList.remove(c1);
  document.body.classList.remove(c2);
  document.body.classList.remove(c3);
  document.querySelector(`#${c1}`).classList.remove('amarelo')
  document.querySelector(`#${c2}`).classList.remove('amarelo')
  document.querySelector(`#${c3}`).classList.remove('amarelo')
}
function adicionarClasse(classe) {
  document.body.classList.add(classe);
  document.querySelector(`#${classe}`).classList.add('amarelo')
}



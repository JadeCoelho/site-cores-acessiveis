let fecharBtn = document.querySelector(".btn-fechar");
let menuBtn = document.querySelector(".btn-menu");
let menu = document.querySelector(".menu");
let options = document.querySelectorAll("option");

menuBtn.addEventListener("click", () => {
  menu.classList.add("ativo");
});
fecharBtn.addEventListener("click", () => {
  menu.classList.remove("ativo");
});

options.forEach((op) => {
  op.addEventListener("click", () => {
    if (op.value === "prot") {
      removerClasses("padrao","deut","trit");
      adicionarClasse("prot");
    } else if (op.value === "deut") {
      removerClasses("padrao","prot","trit");
      adicionarClasse("deut");
    } else if (op.value === "trit") {
      removerClasses("padrao","deut","prot");
      adicionarClasse("trit");
    } else {
      removerClasses("prot","deut","trit");
      adicionarClasse("padrao");
    }
  });
});

function removerClasses(c1,c2,c3) {
  window.document.body.classList.remove(c1);
  window.document.body.classList.remove(c2);
  window.document.body.classList.remove(c3);
}
function adicionarClasse(classe) {
  window.document.body.classList.add(classe);
}

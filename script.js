// PASSO 1 - PEGAR ELEMENTOS DO HTML / (FORMULÁRIO)
const form = document.getElementById(`form`);

// PASSO 2 - OBSERVAR AÇÃO DO FORMULÁRIO || EVENTO DE ENVIO DO FORMULÁRIO

form.addEventListener(`submit`, (ev) => {
  ev.preventDefault();

  !isFormInvalid() ? submit() : alert(`Os campos do formulário são Obrigatórios`);
});

// PEGAR INFORMACOES DO INPUTS
function getFormValues() {
  return {
    usuario: document.querySelector(`#user`).value,
    senha: document.querySelector(`#pass`).value,
    confirmaSenha: document.querySelector(`#cPass`).value,
    email: document.querySelector(`#email`).value,
  };
}

// VERIFICA SE O FORMULÁRIO É INVÁLIDO
function isFormInvalid() {
  const form = getFormValues();

  return (
    form.usuario.length === 0 || form.senha.length === 0 || form.confirmaSenha.length === 0 || form.email.length === 0
  );
}

// VALIDANDO SE AS SENHAS CONFEREM
function checkSenha() {
  return getFormValues().senha === getFormValues().confirmaSenha;
}

// FUNÇÃO DE ENVIO DO FORMULÁRIO
function submit() {
  if (!checkSenha()) {
    alert(`Senhas não conferem`);
    return;
  }
  alert(`Usuário ${getFormValues().email} criado com sucesso!`);
}

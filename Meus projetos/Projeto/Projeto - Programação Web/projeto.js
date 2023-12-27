document.getElementById("botao").addEventListener("click", function () {
  var senha = document.getElementById("senha").value;
  var confirmaSenha = document.getElementById("confirmaSenha").value;
  var mensagem = botao(senha, confirmaSenha);
  document.getElementById("mensagem").textContent = mensagem;
});

function botao(senha, confirmaSenha) {

  if (senha === 'Jose_33799261' && confirmaSenha === 'Luis_33663416' || senha === 'Luis_33663416' && confirmaSenha === 'Jose_33799261') {
    return "Nomes dos criadores OK!";
  }

  else if (senha !== confirmaSenha) {
    return "As senhas não são iguais.";
  }

  else if (!/^(?=.*[!_@#$%&*])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(senha)) {
    return "A senha não atende aos critérios de validação.";
  }

  else if (/(\w)\1\1/.test(senha)) {
    return "A senha não pode conter 3 caracteres repetidos em sequência.";
  }

  else if (/012|123|234|345|456|567|678|789/.test(senha) || /987|876|765|654|543|432|321|210/.test(senha)) {
    return "A senha não pode conter sequência de números.";
  }

  else {
    return "Acesso Permitido, Bem Vindo a Matrix!";
  }
}
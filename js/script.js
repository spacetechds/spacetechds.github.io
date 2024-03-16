function mostrarTurmas() {
    var curso = document.getElementById("course").value;
    var turmaDropdown = document.getElementById("class");
    if (curso === "ADM") {
      turmaDropdown.innerHTML = '<option value="1° ano">1º Ano</option>';
    } else {
      turmaDropdown.innerHTML = '<option value="">Selecione a Turma</option>' +
                                '<option value="1° ano">1º Ano</option>' +
                                '<option value="2° ano">2º Ano</option>' +
                                '<option value="3° ano">3º Ano</option>';
    }
  }
/*Esconde as opções de turma, exceto 1º ano, caso escolha ADM*/

function validarNome() {
    var nomeInput = document.getElementById("name");
    var nome = nomeInput.value.trim();
    var minCaracteres = 15; 
    if (nome.length < minCaracteres) {
      alert("Insira um nome com pelo menos " + minCaracteres + " caracteres.");
      nomeInput.focus();
      return false;
    }
    return true;
  }
  /*Obriga colocar um nome com no mínimo 15 caracteres*/
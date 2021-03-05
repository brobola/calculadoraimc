function calcular (peso, altura){
  var peso = document.getElementById('Peso').value;
  var altura = document.getElementById('Alt').value;
  var imc = peso/(altura*altura);
  document.getElementById('resultado').innerHTML = imc.toFixed(2);

  if (imc <= 18.5){
      document.getElementById('bajodepeso').classList.add('destaque');
    }
  else if (imc > 18.5 && imc <= 24.9){
    document.getElementById('pesosaludable').classList.add('destaque');
    }
  else if (imc >= 25 && imc <= 29.9){
    document.getElementById('Sobrepeso').classList.add('destaque');
    }
  else if (imc >= 30 && imc <= 34.9){
  document.getElementById('Obesidaddegrado1').classList.add('destaque');
    }
  else if (imc >= 35 && imc <= 39.9){
  document.getElementById('Obesidaddegrado2').classList.add('destaque');
    }
  else if (imc >= 40){
  document.getElementById('Obesidadmorbida').classList.add('destaque');
  }
  else {
  document.getElementById('resultado').innerHTML = "Inserte un valor valido.";
  }
} 
const botaoEnviar = document.getElementById('enviar');
const resultClass = document.getElementsByClassName('result-display');
const ImcDisplay = document.getElementById('imc-display');
const clasDisplay = document.getElementById('classificacao-display');
const resultDiv = document.getElementById('result');
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso')

const getInputs = () => {
	resultClass[0].style.opacity = "0";
	resultClass[1].style.opacity = "0";
	const altura = alturaInput.value;
	const peso = pesoInput.value;
	try { 
		resultDisplay(calcularIMC(altura,peso));
	} catch(e) {
		alert("Revise os números digitados.");
	}
}

const calcularIMC = (altura, peso) => {
	altura = Number(altura.replace(',', '.'));
	peso = Number(peso.replace(',', '.'));
	if (!altura || !peso) {
		throw new Error('Dados inválidos para o cálculo');
	} else {
		let imc = peso / altura ** 2;
		imc = Math.round(imc*1e2) / 1e2;
		return imc;
	}
}

const resultDisplay = (imc) => {
	
	setTimeout(
		()=>{
			if (typeof imc == 'number' && !Number.isNaN(imc)) {
				ImcDisplay.textContent = imc;
				if (imc < 18.5) {
					clasDisplay.textContent = "ABAIXO DO IDEAL";
				} else if (imc >= 18.5 && imc < 25.0) {
					clasDisplay.textContent = "IDEAL";
				} else if (imc >= 25.0 && imc < 30.0) {
					clasDisplay.textContent = "ACIMA DO IDEAL";
				} else if (imc >= 30.0) {
					clasDisplay.textContent = "OBESIDADE";
				}
				
				if (resultDiv.style.display == "") {
					resultDiv.style.display = "flex";
					setTimeout(() => {
							resultDiv.style["animation-play-state"] = "running";
							resultDiv.style.opacity = "1";
						}, 1);
				}
				setTimeout(()=>{
						resultClass[0].style.opacity = "1";
						resultClass[1].style.opacity = "1";
					}, 1);
			} else {
				throw new Error("IMC inválido");
			}
		}, 300);
}

window.addEventListener('load', () => {
	
	botaoEnviar.addEventListener('click', getInputs);
	
	pesoInput.addEventListener('keypress', 
		(keyClicked) => {
			if (keyClicked.key === 'Enter') 
				getInputs();
		});

	alturaInput.addEventListener('input', 
		() => {
			if(pesoInput.value.length > 1 && alturaInput.value.length >= 1) {
				botaoEnviar.style["color"] = "rgb(82, 228, 220)";
			} else {
				botaoEnviar.style["color"] = "lightgray";
			}
		});
	
	pesoInput.addEventListener('input', 
		() => {
			if(pesoInput.value.length > 1 && alturaInput.value.length >= 1) {
				botaoEnviar.style["color"] = "rgb(82, 228, 220)";
			} else {
				botaoEnviar.style["color"] = "lightgray";
			}
		});
});
const botaoEnviar = document.getElementById('enviar');
const ImcDisplay = document.getElementById('imc-display');
const clasDisplay = document.getElementById('classificacao-display');


const getInputs = () => {
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
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
	if (typeof imc == 'number' && !Number.isNaN(imc))
		ImcDisplay.textContent = imc;
	else throw new Error("IMC inválido");

	if (imc < 18.5) {
		alert(`Seu imc (${imc}) está abaixo do ideal.`);
	} else if (imc >= 18.5 && imc < 25.0) {
		alert(`Seu imc (${imc}) está no ideal.`);
	} else if (imc >= 25.0 && imc < 30.0) {
		alert(`Seu imc (${imc}) está um pouco acima do ideal.`);
	} else if (imc >= 30.0) {
		alert(`Seu imc (${imc}) está acima do ideal.`);
	}
}

window.addEventListener('load', () => {
	botaoEnviar.addEventListener('click', getInputs);
	peso.addEventListener('keyup', (keyClicked) => {
		if (keyClicked.key === 'Enter') { getInputs(); }
	});
});
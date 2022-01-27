let botaoEnviar = document.getElementById('enviar');

function calcularIMC() {
	let altura = document.getElementById('altura').value;
	let peso = document.getElementById('peso').value;
	altura = Number(altura.replace(',', '.'));
	peso = Number(peso.replace(',', '.'));
	if (!altura || !peso) {
		alert('Digite altura e peso corretamente.');
	} else {
		let imc = peso / altura ** 2;
		//imc = imc.toFixed(2);
		imc = Math.round(imc*1e2) / 1e2;
		console.log(imc);

		if (imc < 18.5) {
			alert(`Seu imc (${imc}) está abaixo do ideal.`);
		} else if (imc >= 18.5 && imc < 25.0) {
			alert(`Seu imc (${imc}) está no ideal.`);
		} else if (imc >= 25.0 && imc < 30.0) {
			alert(`Seu imc (${imc}) está um pouco acima do ideal.`);
		} else if (imc >= 30.0) {
			alert(`Seu imc (${imc}) está acima do ideal.`);
		} else {
			alert('Não foi possível calcular, revise os números indicados.');
		}
	}
}

window.addEventListener('load', () => {
	botaoEnviar.addEventListener('click', calcularIMC);
	peso.addEventListener('keyup', (keyClicked) => {
		if (keyClicked.key === 'Enter') { calcularIMC(); }
	});
});
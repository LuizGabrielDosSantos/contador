function atualizarContador(dataInicio) {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('anos').textContent = `Anos: ${anos}`;
    document.getElementById('meses').textContent = `Meses: ${meses}`;
    document.getElementById('dias').textContent = `Dias: ${dias}`;
    document.getElementById('horas').textContent = `Horas: ${horas}`;
    document.getElementById('minutos').textContent = `Minutos: ${minutos}`;
    document.getElementById('segundos').textContent = `Segundos: ${segundos}`;
}

const dataInicio = new Date('2025-03-03T00:00:00'); // Substitua pela data desejada
setInterval(() => atualizarContador(dataInicio), 1000);

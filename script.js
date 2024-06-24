/* script.js */
window.onload = function() {
    // Iniciar a animação do envelope automaticamente
    const wrapper = document.getElementById('envelope-wrapper');
    wrapper.classList.add('animate');

    // Aguarda a duração da animação (1.5 segundos) antes de exibir a entrada de nome
    setTimeout(() => {
        document.getElementById('dialog-overlay').style.display = 'flex';
    }, 1500); // Tempo em milissegundos correspondente à duração da animação
};

function showMessage() {
    const nome = document.getElementById('nome').value;

    if (nome.trim() !== "") {
        window.location.href = `message.html?nome=${encodeURIComponent(nome)}`;
    } else {
        alert("Por favor, digite seu nome.");
    }
}

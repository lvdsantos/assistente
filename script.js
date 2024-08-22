function sendMessage() {
    const input = document.querySelector('.gsc-input');
    const message = input.value.trim();
    
    if (message) {
        // Exibe a mensagem do usuário no chat
        const chatBox = document.getElementById('chatBox');
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = message;
        chatBox.appendChild(userMessage);
        
        // Limpa o campo de entrada
        input.value = '';

        // A pesquisa será executada automaticamente pelo Google CSE
    }
}


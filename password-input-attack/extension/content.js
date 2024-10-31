const capturePassword = () => {
  const passwordField = document.querySelector('input[type="password"]');

  if (passwordField) {
      passwordField.addEventListener('input', () => {
          console.log(`Valor da senha: ${passwordField.value}`);
      });
  } else {
      console.log('Campo de senha não encontrado.');
  }
};

capturePassword();
form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const dados = {
      username: form.username.value,
      password: form.password.value,
    };
  
    try {
      const resposta = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });
  
      const texto = await resposta.text();
  
      if (resposta.ok) {
        mensagem.style.color = '#8f8'; // verde
        mensagem.textContent = texto;
  
        setTimeout(() => {
          window.location.href = '005.html';  // redireciona para 005.html
        }, 1000);
  
      } else {
        mensagem.style.color = '#f88'; // vermelho
        mensagem.textContent = texto;
      }
    } catch (error) {
      mensagem.style.color = '#f88';
      mensagem.textContent = 'Erro na comunicação com o servidor.';
      console.error(error);
    }
  });
  
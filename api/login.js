export default function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).end('Método não permitido');
      return;
    }
  
    const { username, password } = req.body;
  
    const userFake = 'zerkova';
    const passFake = 'ovogrande1';
  
    if (username === userFake && password === passFake) {
      res.status(200).end('Login bem-sucedido!');
    } else {
      res.status(401).end('Usuário ou senha inválidos');
    }
  }
  
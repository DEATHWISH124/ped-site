export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).send('Método não permitido');
    }
  
    const { username, password } = req.body;
  
    const userFake = 'zerkova';
    const passFake = 'ovogrande1';
  
    if (username === userFake && password === passFake) {
      res.status(200).send('Login bem-sucedido!');
    } else {
      res.status(401).send('Usuário ou senha inválidos');
    }
  }
  
import express from 'express';

const app = express();

app.get('/users', (request, response) => response.json([
	{ id: 1, name: 'Victor Afonso Alves Badaró' },
	{ id: 2, name: 'Miryam Cristina Rodrigues Santana Badaró' },
	{ id: 3, name: 'Lívia Rodrigues Badaró' },
	{ id: 4, name: 'Ana Laura Rodrigues Badaró' }
]));

app.listen(3333, () => console.log('Server is now running at port number 3333 🚀'));

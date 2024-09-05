import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => response.json([
	{ id: 1, name: 'Victor Afonso Alves Badaró' },
	{ id: 2, name: 'Miryam Cristina Rodrigues Santana Badaró' },
	{ id: 3, name: 'Lívia Rodrigues Badaró' },
	{ id: 4, name: 'Ana Laura Rodrigues Badaró' }
]));

export { usersRouter };

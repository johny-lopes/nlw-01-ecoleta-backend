import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        // para funcionar no projeto mobile substitua o localhost pelo IP de onde está rodando o backend
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems);
    }
}

export default ItemsController;
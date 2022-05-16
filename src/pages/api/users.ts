import {NextApiRequest, NextApiResponse} from 'next'

export default (request : NextApiRequest, response : NextApiResponse) => {
    const users = [
        {id: 1, nome: 'João'},
        {id: 2, nome: 'Pedro'},
        {id: 3, nome: 'Mateus'}
    ]
    return response.json(users)
}
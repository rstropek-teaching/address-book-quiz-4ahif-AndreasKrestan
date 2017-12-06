import { Next, Request, Response } from 'restify';
import { BadRequestError, NotFoundError } from 'restify-errors';
import { contacts } from './data';

export function deleteSingle(req: Request, res: Response, next: Next): void {
    const selectedId = parseInt(req.params.id);
    if (selectedId) {
        const index = contacts.filter(c => c.id === selectedId)[0].id;
        if (index !== (-1)) {
            contacts.splice(index, 1);
            next();
        } else {
            next(new NotFoundError());
        }
    } else {
        next (new BadRequestError('ID is required to be a number only!'));
    }
}
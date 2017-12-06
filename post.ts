import { Next, Request, Response } from 'restify';
import { BadRequestError } from 'restify-errors';
import { contacts, IEntry } from './data';

export function post(req: Request, res: Response, next: Next): void {
    if (!req.body.id || !req.body.fn || !req.body.ln || !req.body.numb) {
        next(new BadRequestError('Make sure you enter the following parameters: ID, Firstname, Lastname, Phonenumber!'));
    } else {
        const newId = parseInt(req.body.id);
        if (!newId) {
            next(new BadRequestError('ID is required to be a number only!'));
        } else {
            const newEntry: IEntry = {id: newId, fn: req.body.fn, ln: req.body.ln, numb: req.body.numb};
            contacts.push(newEntry);
        }
    }
}
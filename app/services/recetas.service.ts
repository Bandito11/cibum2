import {Injectable} from 'angular2/core';
import {RECETAS} from '../mock-data/mock-ingredientes';

@Injectable()

export class RecetaService {
    getRecetas(){
        return Promise.resolve(RECETAS)
    }
}
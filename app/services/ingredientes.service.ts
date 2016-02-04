import {Injectable} from 'angular2/core';
import {INGREDIENTES} from '../mock-data/mock-ingredientes';

@Injectable()

export class IngredienteService {
    getIngredientes(){
        return Promise.resolve(INGREDIENTES);
    }
}
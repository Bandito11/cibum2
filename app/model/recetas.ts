import {modelIngrediente} from '../model/ingredientes';

export interface modelReceta{
    name:string;
    ingredientes:modelIngrediente[];
    image:string;
    pasos:string[];
}
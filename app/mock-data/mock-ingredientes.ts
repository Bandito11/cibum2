import {modelIngrediente} from '../model/ingredientes';
import {modelReceta} from '../model/recetas';

export var INGREDIENTES: modelIngrediente[] = [
    { "name": "huevos", "image": "./img/huevos.jpg", "checked": false },
    { "name": "mayonesa", "image": "./img/mayonesa.jpg", "checked": false }
];

export var RECETAS: modelReceta[] = [
    {
        "name": "Ensalada de Huevo",
        "image": "./img/ensalada-de-huevos.jpg",
        "ingredientes": [
            {
                "name": "huevos",
                "image": "./img/huevos.jpg",
                "checked": true
            }, {
                "name": "mayonesa",
                "image": "./img/mayonesa.jpg",
                "checked": true
            }
        ],
        "pasos": [
            "En una olla mediana, echarle agua dentro de ésta.",
            "Sin romper el cascarón echar adentro de la olla los huevos que se quieran consumir.",
            "Calentar en una estufa a fuego alto por 20 minutos.",
            "Con una cucharada de mayonesa mezclar con el huevo hasta que se vea de un color amarillento.",
            "Despues de esto se puede mezclar con cualquier verdura que quiera o comérselo en un empaderado."
            
        ]
    },
    {
        "name": "Revoltillo de Huevo",
        "image": "./img/revoltillo-de-huevo.jpg",
        "ingredientes": [
            {
                "name": "huevos",
                "image": "./img/huevos.jpg",
                "checked": true
            }
        ],
        "pasos":[
            "Romper el cascarón y echar el huevo en un plato hondo.",
            "Con un tenedor, batir el huevo hasta que la yema este mezclado completamente con la clara",
            "En un sartén a temperatura mediana, echar el huevo dentro de ésta, utilizando una éspatula para moverla.",
            "Cuando el huevo tenga un color amarillo oscura y se vea sólida sacarla del sárten y consumir."
        ]
    }
];
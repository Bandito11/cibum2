import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {modelReceta} from '../../model/recetas';
import {RecetaService} from '../../services/recetas.service';
import {OnInit} from 'angular2/core';
import {Info} from '../../pages/recInfo/recInfo'

@Page({
    templateUrl: 'build/pages/Recetas/recetas.html',
})
export class Recetas {

    constructor(nav: NavController, params: NavParams, private _recetaService: RecetaService) {
        this.nav = nav;
        this.selection = { query: params.data.items };
    }

    private selection: any;
    private nav: any;
    private recetas: modelReceta[] = [];
    public recetaLista: modelReceta[] = [];
    
    openInfo(receta):void{
        this.nav.push(Info, {items:receta});
    }

    getRecetas(): void {
        var newSelection = this.selection;
        var recetaLista: modelReceta[] = this.recetaLista;
        this._recetaService.getRecetas()
            .then(function(value) {
                for (var j = 0; j < value.length; j++) {
                    for (var z = 0; z < value[j].ingredientes.length; z++) {
                        for (var y = 0; y < newSelection.query.length; y++) {
                            if (newSelection.query[y] == value[j].ingredientes[z].name) {
                                recetaLista.push(value[j]);
                            }
                        }
                    }
                }
                recetaLista = removeDuplicates(recetaLista);
            })

        function removeDuplicates(arr) {
            var i, j, cur, found;
            for (i = arr.length - 1; i >= 0; i--) {
                cur = arr[i];
                found = false;
                for (j = i - 1; !found && j >= 0; j--) {
                    if (cur === arr[j]) {
                        if (i !== j) {
                            arr.splice(i, 1);
                        }
                        found = true;
                    }
                }
            }
            return arr;
        };
    }

    ngOnInit(): void {
        this.getRecetas();
    };


}
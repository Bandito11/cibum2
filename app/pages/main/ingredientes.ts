import {Page, NavController} from 'ionic-framework/ionic';
import {modelIngrediente} from '../../model/ingredientes';
import {IngredienteService} from '../../services/ingredientes.service';
import {OnInit} from 'angular2/core';
import {Recetas} from '../../pages/recetas/recetas';

@Page({
  templateUrl: 'build/pages/main/ingredientes.html',
})
export class IngredientesPage {
    
  constructor(private _ingredienteService: IngredienteService, nav:NavController){
      this.searchQuery = '';
      this.nav = nav;
  }
  
  public searchQuery:string;
  private nav:any;
  private ingredientes:modelIngrediente[];  
  
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  
  openRecetas ():void{
      var query = [];
      //query the array
      for(var i = 0; i < this.ingredientes.length;i++){
          if(this.ingredientes[i].checked){
              query.push(this.ingredientes[i].name);
          }
      }
      this.nav.push(Recetas, {items:query});
      
  }
  
  getIngredientes():void{
      //get the Ingredientes from the service
      this._ingredienteService.getIngredientes()
         .then(ingredientes => this.ingredientes = ingredientes);  
  }
  
  ngOnInit():void{
      //initialize the array ingredientes
      this.getIngredientes();
  }
  
  public searchIngrediente(search):void{
      
      //if the value is an empty string don't filter the items
      if(search.trim() == ''){
          //Reset values in the array Ingrediente
          this.getIngredientes();
          return;
      }
      
      this.ingredientes = this.ingredientes.filter((v) => {          
        if(v.name.toLowerCase().indexOf(search.toLowerCase()) > -1){
            return true;
        }
        return false;
      });
  }
}//end

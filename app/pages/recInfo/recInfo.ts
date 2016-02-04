import {Page, NavController, NavParams} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/recInfo/recInfo.html',
})
export class Info {
  constructor(nav: NavController, params: NavParams) {
      this.nav = nav;
      this.info = { receta: params.data.items };
  }
  
  nav:any;
  info:any;
  
  
}

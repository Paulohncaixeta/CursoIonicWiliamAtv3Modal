import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular/navigation/nav-controller';



/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  text: string
  retorno: string

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams,
              public navCtrl: NavController,
              public storage: Storage) {
}

  SalvarPin(){
    this.storage.set("_num", this.text)
    this.storage.get('_num').then((res) => {this.retorno=res})
    this.navCtrl.push('FormularioPage')
  }

  fecharModal(){
    this.viewCtrl.dismiss()
  }
}

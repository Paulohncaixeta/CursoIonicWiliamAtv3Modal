import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalComponent } from '../../components/modal/modal';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(public navCtrl: NavController, 
              public abreModal: ModalController) 
    {
    
    }


    ViewPinModal(){
      const modalCreate = this.abreModal.create(ModalComponent)
      modalCreate.present()
    }

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-login',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  public FormularioInscricaoForm: FormGroup;
  
  
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public Frb: FormBuilder) 
    {
      this.FormularioInscricaoForm = Frb.group({
      primeiroNome: [null, [Validators.required]],
      sobrenome:    [null, [Validators.required]],
      cidade:       [null, [Validators.required]],
      email:        [null, [Validators.required]],
      idade:        [null, [Validators.required]]
      });
    }


     view_log(){
      console.log(this.FormularioInscricaoForm.value)
    }
  
    VoltarParaInicio(){
      this.navCtrl.push(LoginPage)
    }

}

 


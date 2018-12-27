import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvUsuariosProvider } from '../../providers/prov-usuarios/prov-usuarios';
import { DetalleEmpleadosPage } from '../detalle-empleados/detalle-empleados';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios
  error_msg
  constructor(public navCtrl: NavController, public proveedor_usuarios: ProvUsuariosProvider ) {
  }

  ionViewDidLoad() {
    this.proveedor_usuarios.getJSON_usuarios()
      .subscribe(
        (data) => { this.usuarios = data; },
        (error) => { this.error_msg = error;}
      ) 
  }

  detalle_empleado(usuario) { 
    this.navCtrl.push(DetalleEmpleadosPage, {usuario: usuario});
  }



}

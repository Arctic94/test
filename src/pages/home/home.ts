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
  items
  constructor(public navCtrl: NavController, public proveedor_usuarios: ProvUsuariosProvider) {
    
  }


  ionViewDidLoad() {
    
    this.proveedor_usuarios.getJSON_usuarios()
      .subscribe(
        (data) => {
          this.usuarios = data;
          this.items = data
        },
        
        (error) => { this.error_msg = error;}
    ) 
    //this.inicializarItems();
  }

  detalle_empleado(usuario) { 
    this.navCtrl.push(DetalleEmpleadosPage, {usuario: usuario});
  }

  inicializarItems() {
    this.items = this.usuarios;
    
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.inicializarItems();
    

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}

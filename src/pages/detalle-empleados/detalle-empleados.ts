import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DetalleEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-empleados',
  templateUrl: 'detalle-empleados.html',
})
export class DetalleEmpleadosPage {

  usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = navParams.data.usuario;
  }

  validar_rut() { // código modificado para typescript, tomado de https://gist.github.com/rotvulpix/69a24cc199a4253d058c#file-validarrut-js
    let rut = this.usuario.rut;
    let i: number = 1;

    rut = rut.replace('-', ''); //quitar guion
    
    let cuerpo = rut.slice(0, -1); 
    
    let dv = rut.slice(-1).toUpperCase();
    

    if (cuerpo.length < 7) { return true}
    
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;
    
    // Para cada dígito del Cuerpo
    
    for (i; i <= cuerpo.length;i++) {
      
        // Obtener su Producto con el Múltiplo Correspondiente
        let index = multiplo * rut.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    
    let dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) { return true; }
    
    return false;
    

  }

  validar_fechaNac() {
    let fecha = this.usuario.fechaNacimiento;
    let dia = fecha.slice(0, 2);
    let mes = fecha.slice(3, 5);
    let anio = fecha.slice(6, fecha.length);
    
    if (mes > 12 || mes < 1) { return true };
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 9 || mes == 11){
      if (dia < 1 || dia > 31) {
        return true;
      }
    }
    if (mes == 4 || mes == 6 || mes == 8 || mes == 10 || mes == 12){
      if (dia < 1 || dia > 30) {
        return true;
      }
    }
    if (anio < 1900 || anio > new Date().getFullYear()) {
      return true;
    } else { //si el año es correcto
      if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0) {
        if (mes == 2) { //si es febrero de un año biciesto
          if (dia < 1 || dia > 29) { return true;}
        }
      } else {// años normales
        if (mes == 2) {
          if (dia < 1 || dia > 28) { return true;}
        }
      }  
    }
    return false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleEmpleadosPage');
  }

}

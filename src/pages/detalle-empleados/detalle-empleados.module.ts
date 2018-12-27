import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleEmpleadosPage } from './detalle-empleados';

@NgModule({
  declarations: [
    DetalleEmpleadosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleEmpleadosPage),
  ],
})
export class DetalleEmpleadosPageModule {}

import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


/*
  Generated class for the ProvUsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvUsuariosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProvUsuariosProvider Provider');
  }
  
  getJSON_usuarios() {
    return this.http.get("https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user");
  }
}

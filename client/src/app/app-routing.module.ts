import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanalOsiptelComponent } from './components/canal-osiptel/canal-osiptel.component';
import { CuestionamientosComponent } from './components/cuestionamientos/cuestionamientos.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { CanalAtencionEoComponent } from './components/canal-atencion-eo/canal-atencion-eo.component';
import { DialogCanalDesEoComponent } from './components/dialog/dialog-canal-des-eo/dialog-canal-des-eo.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { FormDenunciaComponent } from './components/denuncias/form-denuncia/form-denuncia.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroUsuarioComponent
  },
  {
    path: 'denuncias',
    component: DenunciasComponent
  },
  {
    path: 'denuncias/nuevo',
    component: FormDenunciaComponent
  },
  {
    path: 'canal-osiptel',
    component: CanalOsiptelComponent
  },
  {
    path: 'cuestionamientos',
    component: CuestionamientosComponent
  },
  {
    path: 'canal-atencion-eo',
    component: CanalAtencionEoComponent
  },
  {
    path: 'dialog-canal-des-eo',
    component: DialogCanalDesEoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

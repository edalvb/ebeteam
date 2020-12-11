import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanalOsiptelComponent } from './components/canal-osiptel/canal-osiptel.component';
import { CuestionamientosComponent } from './components/cuestionamientos/cuestionamientos.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';

import { HomeComponent } from './components/home/home.component';
import { InterfazOsiptelComponent } from './components/interfaz-osiptel/interfaz-osiptel.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

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
    path: 'canal-osiptel',
    component: CanalOsiptelComponent
  },
  {
    path: 'cuestionamientos',
    component: CuestionamientosComponent
  },
  {
    path: 'osiptel',
    component: InterfazOsiptelComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

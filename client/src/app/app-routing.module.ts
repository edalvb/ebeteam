import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanalOsiptelComponent } from './components/canal-osiptel/canal-osiptel.component';
import { CardOptionsComponent } from './components/card-options/card-options.component';
import { CuestionamientosComponent } from './components/cuestionamientos/cuestionamientos.component';
import { ScnDenunciasComponent } from './components/denuncias/scn-denuncias/scn-denuncias.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
    component: ScnDenunciasComponent
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
    path: 'cards',
    component: CardOptionsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

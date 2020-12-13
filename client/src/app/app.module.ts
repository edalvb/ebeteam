import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatNativeDateModule } from "@angular/material/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { CdkStepperModule } from '@angular/cdk/stepper';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CanalAtencionEoComponent } from './components/canal-atencion-eo/canal-atencion-eo.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { StepRegistroComponent } from './components/registro-usuario/step-registro/step-registro.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MonitoreoPaginaComponent } from './components/monitoreo-pagina/monitoreo-pagina.component';
import { OficinaOsiptelComponent } from './components/oficina/oficina-osiptel/oficina-osiptel.component';
import { CanalAtencionOsiptelComponent } from './components/canal-osiptel/canal-atencion-osiptel/canal-atencion-osiptel.component';
import { CanalOsiptelComponent } from './components/canal-osiptel/canal-osiptel.component';
import { MapaDialogOficinaComponent } from './components/mapa/mapa-dialog-oficina/mapa-dialog-oficina.component';
import { AutenticarComponent } from './components/autenticar/autenticar.component';
import { FormDenunciaComponent } from './components/denuncias/form-denuncia/form-denuncia.component';
import { DialogCanalDesOsiptelComponent } from './components/dialog/dialog-canal-des-osiptel/dialog-canal-des-osiptel.component';
import { DialogCanalDesEoComponent } from './components/dialog/dialog-canal-des-eo/dialog-canal-des-eo.component';


import { CuestionamientosComponent } from './components/cuestionamientos/cuestionamientos.component';
import { CardOptionsComponent } from './components/card-options/card-options.component';

import { OficinaEoComponent } from './components/oficina/oficina-eo/oficina-eo.component';
import { DialogCanalPresDesOsiptelComponent } from './components/dialog/dialog-canal-pres-des-osiptel/dialog-canal-pres-des-osiptel.component';
import { DescripcionCanalDialogComponent } from './components/canal-osiptel/descripcion-canal-dialog/descripcion-canal-dialog.component';
import { TituloDialogComponent } from './components/dialog/titulo-dialog/titulo-dialog.component';
import { DescripcionEoComponent } from './components/oficina/oficina-eo/descripcion-eo/descripcion-eo.component';
import { CardAtencionEoComponent } from './components/oficina/oficina-eo/card-atencion-eo/card-atencion-eo.component';

import { NgxFileDropModule } from 'ngx-file-drop';
import { FileDropComponent } from './components/file-drop/file-drop.component';
import { InterfazOsiptelComponent } from './components/interfaz-osiptel/interfaz-osiptel.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavPrincipalComponent } from './nav-principal/nav-principal.component';
import { InboxComponent } from './components/panel-content/inbox/inbox.component';
import { DenTableComponent } from './components/panel-content/scn-denuncia/den-table/den-table.component';
import { RegDenunciaComponent } from './components/panel-content/scn-denuncia/reg-denuncia/reg-denuncia.component';
import { ScnDenunciaComponent } from './components/panel-content/scn-denuncia/scn-denuncia.component';

import { ScnCuestionComponent } from './components/panel-content/scn-cuestion/scn-cuestion.component';
import { CuestTableComponent } from './components/panel-content/scn-cuestion/cuest-table/cuest-table.component';
import { CuestFormComponent } from './components/panel-content/scn-cuestion/cuest-form/cuest-form.component';

import { SelectUbicacionComponent } from './components/selecciones/select-ubicacion/select-ubicacion.component';
import { DialogElegirEoComponent } from './components/dialog/dialog-elegir-eo/dialog-elegir-eo.component';
import { SelectServicioComponent } from './components/selecciones/select-servicio/select-servicio.component';
import { SelectRecursoComponent } from './components/selecciones/select-recurso/select-recurso.component';
import { DialogElegirMateriaComponent } from './components/dialog/dialog-elegir-materia/dialog-elegir-materia.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    HomeComponent,
    LoginComponent,
    CanalAtencionEoComponent,
    DenunciasComponent,
    StepRegistroComponent,
    MonitoreoPaginaComponent,
    OficinaOsiptelComponent,
    CanalAtencionOsiptelComponent,
    CanalOsiptelComponent,
    MapaDialogOficinaComponent,
    AutenticarComponent,
    FormDenunciaComponent,
    DialogCanalDesOsiptelComponent,
    DialogCanalDesEoComponent,
    OficinaEoComponent,

    CuestionamientosComponent,
    CardOptionsComponent,

    DialogCanalPresDesOsiptelComponent,
    DescripcionCanalDialogComponent,
    TituloDialogComponent,
    DescripcionEoComponent,
    CardAtencionEoComponent,
    FileDropComponent,
    InterfazOsiptelComponent,
    PanelControlComponent,
    NavPrincipalComponent,
    InboxComponent,
    DenTableComponent,
    RegDenunciaComponent,
    ScnDenunciaComponent,
    ScnCuestionComponent,
    CuestTableComponent,
    CuestFormComponent,
    SelectUbicacionComponent,
    DialogElegirEoComponent,

    SelectServicioComponent,
    SelectRecursoComponent,
    DialogElegirMateriaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatStepperModule,
    MatSnackBarModule,
    CdkStepperModule,
    NgxCaptchaModule,
    MatListModule,
    MatDialogModule,
    MatSortModule,
    MatMenuModule,
    MatBadgeModule,
    NgxFileDropModule,
    MatPaginatorModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZWRhbHZiIiwiYSI6ImNraWV1OXpmZzFqODUyeXJ0ZGJvbGhkZWIifQ.mZWepF12ftoqj2suS961IQ', // Optional, can also be set per map (accessToken input of mgl-map)
      // geocoderAccessToken: 'TOKEN' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    }),
    MatRippleModule,
    MatGridListModule,
    MatDialogModule,
    LayoutModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormDenunciaComponent]
})
export class AppModule { }

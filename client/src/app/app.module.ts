import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
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
import {MatDialogModule} from '@angular/material/dialog';

import { CdkStepperModule } from '@angular/cdk/stepper';

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
import { CanalesComponent } from './components/canales/canales.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { AssistantComponent } from './components/assistant/assistant.component';
import { ScnDenunciasComponent } from './components/denuncias/scn-denuncias/scn-denuncias.component';
import { StepRegistroComponent } from './components/registro-usuario/step-registro/step-registro.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MonitoreoPaginaComponent } from './components/monitoreo-pagina/monitoreo-pagina.component';
import { AutenticarComponent } from './components/autenticar/autenticar.component';
import { FormDenunciaComponent } from './components/denuncias/form-denuncia/form-denuncia.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    HomeComponent,
    LoginComponent,
    CanalesComponent,
    DenunciasComponent,
    AssistantComponent,
    ScnDenunciasComponent,
    StepRegistroComponent,
    MonitoreoPaginaComponent,
    AutenticarComponent,
    FormDenunciaComponent,

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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormDenunciaComponent]
})
export class AppModule { }

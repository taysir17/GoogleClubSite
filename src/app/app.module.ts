import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './lescomposants/home/home.component';
import { HeaderComponent } from './lescomposants/header/header.component';
import {HttpClientModule} from "@angular/common/http";

import { AboutComponent } from './lescomposants/about/about.component';
import { ServiceComponent } from './lescomposants/service/service.component';
import { TeamComponent } from './lescomposants/team/team.component';
import { ContactComponent } from './lescomposants/contact/contact.component';
import { ErreurComponent } from './lescomposants/erreur/erreur.component';
import { ProjectsComponent } from './lescomposants/projects/projects.component';
import { FormulaireComponent } from './lescomposants/formulaire/formulaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CongratulationsComponent } from './lescomposants/congratulations/congratulations.component';
import { LoginComponent } from './lescomposants/login/login.component';
import { DepdevComponent } from './lescomposants/depdev/depdev.component';
import { DepmediaComponent } from './lescomposants/depmedia/depmedia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    ErreurComponent,
    ProjectsComponent,
    FormulaireComponent,
    CongratulationsComponent,
    LoginComponent,
    DepdevComponent,
    DepmediaComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

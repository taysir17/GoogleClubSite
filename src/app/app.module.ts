import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './lescomposants/public/home/home.component';
import { HeaderComponent } from './lescomposants/public/header/header.component';
import {HttpClientModule} from "@angular/common/http";

import { AboutComponent } from './lescomposants/public/about/about.component';
import { ServiceComponent } from './lescomposants/public/service/service.component';
import { TeamComponent } from './lescomposants/public/team/team.component';
import { ContactComponent } from './lescomposants/public/contact/contact.component';
import { ErreurComponent } from './lescomposants/erreur/erreur.component';
import { ProjectsComponent } from './lescomposants/admin/projects/projects.component';
import { FormulaireComponent } from './lescomposants/formulaire/formulaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CongratulationsComponent } from './lescomposants/congratulations/congratulations.component';
import { LoginComponent } from './lescomposants/login/login.component';
import { DepdevComponent } from './lescomposants/public/depdev/depdev.component';
import { DepmediaComponent } from './lescomposants/public/depmedia/depmedia.component';
import { InterfaceComponent } from './lescomposants/interface/interface.component';
import { AjoutformationComponent } from './lescomposants/admin/ajoutformation/ajoutformation.component';
import { ModifierComponent } from './lescomposants/admin/modifier/modifier.component';
import { DashboardpublicComponent } from './lescomposants/public/dashboardpublic/dashboardpublic.component';
import { DashboardadminComponent } from './lescomposants/admin/dashboardadmin/dashboardadmin.component';
import { ModifiermdpComponent } from './lescomposants/modifiermdp/modifiermdp.component';
import { FormationComponent } from './lescomposants/public/formation/formation.component';

@NgModule({
  declarations: [
    AjoutformationComponent,
    ModifierComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InterfaceComponent,
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
    DepmediaComponent,
    DashboardpublicComponent,
    DashboardadminComponent,
    ModifiermdpComponent,
    FormationComponent  ],
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

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DetailformationComponent } from './lescomposants/public/detailformation/detailformation.component';
import { PrixPipe } from './prix.pipe';
import { NavbarComponent } from './lescomposants/admin/navbar/navbar.component';
import { ListformationComponent } from './lescomposants/public/listformation/listformation.component';
import { MessagesComponent } from './lescomposants/admin/messages/messages.component';
import { MembreComponent } from './lescomposants/admin/membre/membre.component';
import { ReponseComponent } from './lescomposants/public/reponse/reponse.component';

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
    
    LoginComponent,
    DepdevComponent,
    DepmediaComponent,
    DashboardpublicComponent,
    DashboardadminComponent,
    ModifiermdpComponent,
    FormationComponent,
    DetailformationComponent,
    PrixPipe,
    NavbarComponent,
    ListformationComponent,
    MessagesComponent,
    MembreComponent,
    ReponseComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

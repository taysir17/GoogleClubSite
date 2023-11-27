import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './lescomposants/public/home/home.component';
import { AboutComponent } from './lescomposants/public/about/about.component';
import { ContactComponent } from './lescomposants/public/contact/contact.component';
import { ServiceComponent } from './lescomposants/public/service/service.component';
import { TeamComponent } from './lescomposants/public/team/team.component';
import { ErreurComponent } from './lescomposants/erreur/erreur.component';
import { ProjectsComponent } from './lescomposants/admin/projects/projects.component';
import { FormulaireComponent } from './lescomposants/formulaire/formulaire.component';
import { LoginComponent } from './lescomposants/login/login.component';
import { DepmediaComponent } from './lescomposants/public/depmedia/depmedia.component';
import { InterfaceComponent } from './lescomposants/interface/interface.component';

import { DashboardpublicComponent } from './lescomposants/public/dashboardpublic/dashboardpublic.component';
import { DashboardadminComponent } from './lescomposants/admin/dashboardadmin/dashboardadmin.component';
import { publicGuard } from './public.guard';
import { adminGuard } from './admin.guard';
import { AjoutformationComponent } from './lescomposants/admin/ajoutformation/ajoutformation.component';
import { ModifierComponent } from './lescomposants/admin/modifier/modifier.component';
import { ModifiermdpComponent } from './lescomposants/modifiermdp/modifiermdp.component';
import { interfaceGuard } from './interface.guard';

import { DetailformationComponent } from './lescomposants/public/detailformation/detailformation.component';
import { FormationComponent } from './lescomposants/public/formation/formation.component';
import { ListformationComponent } from './lescomposants/public/listformation/listformation.component';
import { MembreComponent } from './lescomposants/admin/membre/membre.component';
import { MessageService } from './lesservices/message.service';
import { MessagesComponent } from './lescomposants/admin/messages/messages.component';
import { ReponseComponent } from './lescomposants/public/reponse/reponse.component';


const routes: Routes = [

  {
    path: "interface", title: "interface", component: InterfaceComponent, children: [
      { path: "login", title: "login", component: LoginComponent },
      { path: "formulaire", title: "Signup", component: FormulaireComponent },
    ]
  },
  {
    path: "admin", title: 'admin', component: DashboardadminComponent, canActivate: [adminGuard], children: [
      { path: "modifiermdp", title: 'modifiermdp', component: ModifiermdpComponent },
      { path: "formations", title: 'formations', component: ProjectsComponent },
      { path: "membres", title: 'membres', component: MembreComponent },
      { path: "messages", title: 'messages', component: MessagesComponent },
      { path: "modifier", title: 'modifier', component: ModifierComponent },
      { path: "ajouter", title: 'ajouter', component: AjoutformationComponent },
      { path: "", redirectTo: 'formations', pathMatch: 'full' },
    ]
  },
  {
        path: "public", title: 'public', component: DashboardpublicComponent, canActivate: [publicGuard], 
        children: [
            { path: "modifiermdp", title: 'modifiermdp', component: ModifiermdpComponent },
            { path: "reponse", title: 'reponse', component: ReponseComponent },
            { path: "home", title: 'home', component: HomeComponent },
            { path: "about", title: 'about', component: AboutComponent },
            { path: "contact", title: 'contact', component: ContactComponent },
            {
              path: "departement", title: 'departement', component: ServiceComponent, children: [
                { path: "depmedia", title: "departementmedia", component: DepmediaComponent }

              ]
            },
            { path: "team", title: 'team', component: TeamComponent },
            { path: "lesformation", title: 'lesformation', component: ListformationComponent },
            { path: "formation/:id", title: 'formation/:id', component: DetailformationComponent},
            {path:"detailformation",title:"detailformation",component:DetailformationComponent},
            { path: "", redirectTo: 'home', pathMatch: 'full' },
    ]
  },

  { path: "login", title: "login", component: LoginComponent },
  {path:"detailformation",title:"detailformation",component:DetailformationComponent},
  { path: "", redirectTo: 'interface', pathMatch: 'full' },
  { path: "**", title: 'erreur', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
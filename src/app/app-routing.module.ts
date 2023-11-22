import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './lescomposants/home/home.component';
import { AboutComponent } from './lescomposants/about/about.component';
import { ContactComponent } from './lescomposants/contact/contact.component';
import { ServiceComponent } from './lescomposants/service/service.component';
import { TeamComponent } from './lescomposants/team/team.component';
import { ErreurComponent } from './lescomposants/erreur/erreur.component';
import { ProjectsComponent } from './lescomposants/admin/projects/projects.component';
import { FormulaireComponent } from './lescomposants/formulaire/formulaire.component';
import { CongratulationsComponent } from './lescomposants/congratulations/congratulations.component';
import { LoginComponent } from './lescomposants/login/login.component';
import { DepmediaComponent } from './lescomposants/depmedia/depmedia.component';
import { InterfaceComponent } from './lescomposants/interface/interface.component';
import { DescriptionComponent } from './lescomposants/description/description.component';

const routes: Routes = [
  {path:"home",title:'home',component:HomeComponent,children:[
    {path:"description",title:"dis",component:DescriptionComponent},
  ]},
  {path:"interface",title:"interface",component:InterfaceComponent,children:[
    {path:"login",title:"login",component:LoginComponent},
    {path:"formulaire",title:"Signup",component:FormulaireComponent},
  ]},
  {path:"about",title:'about',component:AboutComponent},
  {path:"contact",title:'contact',component:ContactComponent},
  {path:"departement",title:'departement',component:ServiceComponent,children:[
    {path:"depmedia",title:"departementmedia",component:DepmediaComponent}

  ]},
  {path:"team",title:'team',component:TeamComponent},
  {path:"project",title:'project',component:ProjectsComponent},
  {path:"congratulation",title:"congratulation",component:CongratulationsComponent},
  {path:"login",title:"login",component:LoginComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"**",title:'erreur',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
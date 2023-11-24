import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { Formation } from 'src/app/lesclasses/formation';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { FormationService } from 'src/app/lesservices/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit{
  x:Form[]=[];
  constructor(private router:Router,private formationService:FormationService,private condidatService: CondidatService) { }
  lesformation:Formation[]=[];
  getFormation(){
    this.formationService.getformation().subscribe (data=>this.lesformation=data) }
  
  ngOnInit(): void {
    this.getFormation()
   
  }
   dejasinscrir(f:Formation){
    this.x=f.candidat;
     return !(this.x.includes(this.condidatService.getuser()))
    
 }
  sinscrire(f:Formation){
    this.x=f.candidat
    this.x.push(this.condidatService.getuser());
    this.formationService.patchformation(f.id,{candidat:this.x}).subscribe()

    
   
    
  }
 

}

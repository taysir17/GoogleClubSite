import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/lesclasses/formation';
import { FormationService } from 'src/app/lesservices/formation.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit{
  formation!: FormGroup;
  f!:Formation;
  id:string="";
  
  constructor(private router:Router,private formationService:FormationService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.f=this.formationService.getf()
   
    this.formation = this.formBuilder.nonNullable.group({
      titre: [this.f.titre],
      image: [this.f.image],
      nbheure: [this.f.nbheure],
      certifie:[this.f.certifie],
      datedebut:[this.f.datedebut],
      candidat:[this.f.candidat]
    
      
    });
  }
  onSubmitForm() {
    alert("aa")
    this.formationService.updateformation(this.f.id, this.formation.value).subscribe((data: any) => this.router.navigate(['/admin']));
  }
  
    

 

  
 
}

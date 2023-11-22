import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/lesservices/formation.service';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.css']
})
export class AjoutformationComponent  implements OnInit{
  
  formation!: FormGroup;
  

  constructor( private formBuilder: FormBuilder, private formationService:FormationService,private router:Router) { }

  ngOnInit(): void {
    this.formation = this.formBuilder.group({
      titre: [],
      image: [],
      nbheure: [],
      certifie:[false],
      datedebut:[],
      condidat:[[]]
    
      
    });
  }

  onSubmitForm() {
    this.ajouter();
  }
  
    

  ajouter() {
    this.formationService.addformation(this.formation.value).subscribe((data: any) => this.router.navigate(['/project']));
  }
}

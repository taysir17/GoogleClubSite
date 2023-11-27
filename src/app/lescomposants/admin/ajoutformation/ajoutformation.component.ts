import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      titre: ['', [Validators.required, Validators.pattern('[A-Z][a-z]+')]],
      image: ['', Validators.required],
      nbheure: ['', [Validators.required, Validators.min(1)]],
      certifie: [false],
      datedebut: ['', Validators.required],
      Payant: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      lesmodules: ['', Validators.required],
    });
      
    
  }
  get titre() {
    return this.formation.get('titre');
  }

  get image() {
    return this.formation.get('image');
  }

  get nbheure() {
    return this.formation.get('nbheure');
  }

  get datedebut() {
    return this.formation.get('datedebut');
  }

  get Payant() {
    return this.formation.get('Payant');
  }

  get prix() {
    return this.formation.get('prix');
  }

  get lesmodules() {
    return this.formation.get('lesmodules');
  }


  onSubmitForm() {
    this.ajouter();
  }
  
    

  ajouter() {
    this.formationService.addformation(this.formation.value).subscribe((data: any) => this.router.navigate(['/admin']));
  }
}

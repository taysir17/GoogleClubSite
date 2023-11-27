import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CondidatService } from 'src/app/lesservices/condidat.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {
  personne!: FormGroup;

  constructor( private formBuilder: FormBuilder, private condidatService: CondidatService,private router:Router) { }

  ngOnInit(): void {
    this.personne = this.formBuilder.group({
      nometprenom: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: [, [Validators.required, Validators.pattern(/^\d{8}$/)]],
      password:['', [Validators.required, Validators.minLength(8)]],
      photo:['', Validators.required],
      role:["public"],
      nbvisite:[0],
    
      
    });
  }
  get nometprenom() {
    return this.personne.get('nometprenom');
  }
  get email() {
    return this.personne.get('email');
  }

  get phone() {
    return this.personne.get('phone');
  }
  get password() {
    return this.personne.get('password');
  }

  get photo() {
    return this.personne.get('photo');
  }
  onSubmitForm() {
    this.ajouter();
  }
  
    

  ajouter() {
    this.condidatService.addcondidat(this.personne.value).subscribe(
      (data: any) => 
      {
        console.log('candidat',this.personne.value);
        this.router.navigate(['/interface']);
        
      });
  }
 
  
}

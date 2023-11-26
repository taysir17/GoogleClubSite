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
      nometprenom: ['jhondolé',Validators.required],
      email: ['exemple@gmail.com',[Validators.required, Validators.email]],
      phone: [123488999, [Validators.required, Validators.pattern(/^\d{8}$/)]],
      password:["jdhqsdqj@12", [Validators.required, Validators.minLength(8)]],
      photo:["https://www.aquaportail.com/pictures2307/chat-domestique-europeen.jpg", Validators.required],
      role:["public"]
    
      
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
    this.condidatService.addcondidat(this.personne.value).subscribe((data: any) => this.router.navigate(['/congratulation']));
  }
  login(){
    this.router.navigate(["/public/home"])
  }
  
}

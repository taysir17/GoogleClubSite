import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nometprenom: ['jhondolé'],
      email: ['exemple@gmail.com'],
      phone: [123488999],
      password:["jdhqsdqj@12"],
      photo:["https://www.aquaportail.com/pictures2307/chat-domestique-europeen.jpg"],
      role:["public"]
    
      
    });
  }

  onSubmitForm() {
    this.ajouter();
  }
  
    

  ajouter() {
    this.condidatService.addcondidat(this.personne.value).subscribe((data: any) => this.router.navigate(['/congratulation']));
  }
}

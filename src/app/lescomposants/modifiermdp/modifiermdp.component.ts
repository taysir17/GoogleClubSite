import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { Formation } from 'src/app/lesclasses/formation';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { FormationService } from 'src/app/lesservices/formation.service';

@Component({
  selector: 'app-modifiermdp',
  templateUrl: './modifiermdp.component.html',
  styleUrls: ['./modifiermdp.component.css']
})
export class ModifiermdpComponent implements OnInit{
  changer!: FormGroup;
  user!:Form;
  
  constructor(private router:Router,private condidatService:CondidatService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.user=this.condidatService.getuser()
   
    this.changer = this.formBuilder.nonNullable.group({
      email: [this.user.email],
      mdp: ["",Validators.required],
      nmdp: ["",Validators.required],
    
      
    
      
    });
  }
  onSubmitForm() {
    if(this.changer.value["mdp"]==this.user.password){
      this.condidatService.patchcondidat(this.user.id,{password:this.changer.value["nmdp"]}).subscribe()
      this.router.navigate( ['../'] )
    }
  }
  
    
}

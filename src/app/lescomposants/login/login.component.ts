import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { Form } from 'src/app/lesclasses/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  condidat!: FormGroup;
  tableauForms: Form[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private condidatService: CondidatService
  ) {}

  ngOnInit(): void {
    this.condidat = this.formBuilder.group({
      email: ['exemple@gmail.com', [Validators.required, Validators.email]],
      password: ['123@hjfdhs', Validators.required]
    });
  }

  afficher() {
    
    this.condidatService.login(this.condidat.value["email"]).subscribe(
      data => {
      if (data[0].password==this.condidat.value["password"]){
        this.router.navigate(['/home'])
      }
      else{
        console.log("wrong mdp")
      }
        
      },
     
    );
  }

 
}

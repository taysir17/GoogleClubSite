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
  visible: boolean = false; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private condidatService: CondidatService
  ) {}

  ngOnInit(): void {
    this.condidat = this.formBuilder.group({
      email: ['exemple@gmail.com', [Validators.required, Validators.email]],
      password: ['jdhqsdqj@12', Validators.required]
    });
  }
  

  log() {
   
   this.condidatService.cherchercandidat(this.condidat.value["email"],this.condidat.value["password"]).subscribe(data=>{
    
      if(this.condidatService.login(data)==1){
          this.condidatService.setuser(data[0])
          this.router.navigate(["/public"])

      }
      else if(this.condidatService.login(data)==2){
        this.condidatService.setuser(data[0])
        this.router.navigate(["/admin"])
      }
      else{
        this.visible=true;
      }

      
   })
   
  }
 
  
       
  
     
  }
  
  


 


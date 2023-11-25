import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { MessageService } from 'src/app/lesservices/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message!: FormGroup;
  user!:Form;
  
  constructor(private router:Router,private condidatService:CondidatService,private messageService:MessageService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.user=this.condidatService.getuser()
   
    this.message = this.formBuilder.nonNullable.group({
      msg:["",Validators.required],
      user:[this.user]
    
      
    
      
    });
  }
  onSubmit() {
    
    alert("message envoyer")
    this.messageService.addmessage(this.message.value).subscribe()
    this.message.reset()
  }
  
}

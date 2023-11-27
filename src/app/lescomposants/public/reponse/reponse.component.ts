import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/lesclasses/form';
import { Message } from 'src/app/lesclasses/message';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { MessageService } from 'src/app/lesservices/message.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit{
  user!:Form;

  lesmessages!:Message[];
  constructor(private messageService:MessageService,private condidatService:CondidatService){}
  
  ngOnInit(): void {
    this.user=this.condidatService.getuser()
    this.messageService.getmessages('').subscribe(data=>{this.lesmessages=data;
    this.lesmessages=this.lesmessages.filter(e=>e.user.id==this.user.id && e.reponse!="")})
    throw new Error('Method not implemented.');
  }
}

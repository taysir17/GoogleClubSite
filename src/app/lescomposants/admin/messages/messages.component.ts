import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/lesclasses/message';
import { MessageService } from 'src/app/lesservices/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  lesmessages!:Message[];
  constructor(private messageService:MessageService){}
  
  ngOnInit(): void {
    this.messageService.getmessages('?reponse=').subscribe(data=>this.lesmessages=data)
    
    throw new Error('Method not implemented.');
  }
  repondre(m:Message,r:string,i:number){
    alert("reponse envoyer")
    this.lesmessages.splice(i,1);
    this.messageService.patchmessage(m.id,{reponse:r}).subscribe()
  }
}

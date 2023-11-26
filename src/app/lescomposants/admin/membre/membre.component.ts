import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { CondidatService } from 'src/app/lesservices/condidat.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit{
  

  constructor(private condidatService:CondidatService,private router:Router){}
  ngOnInit(): void {
   this.getpublic()
  
  }
  lespublic:Form[]=[]
  getpublic(){
    this.condidatService.getpublic().subscribe(data=>this.lespublic=data)
  }
  rendreAdmin(m:Form,i:number){
    this.condidatService.patchcondidat(m.id,{role:"admin"}).subscribe()
    this.lespublic.splice(i,1)
    
  }
}

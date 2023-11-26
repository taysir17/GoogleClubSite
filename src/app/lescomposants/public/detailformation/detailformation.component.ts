import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/lesclasses/formation';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { FormationService } from 'src/app/lesservices/formation.service';
import { Form } from 'src/app/lesclasses/form';


@Component({
  selector: 'app-detailformation',
  templateUrl: './detailformation.component.html',
  styleUrls: ['./detailformation.component.css']
})
export class DetailformationComponent implements OnInit{
    x:Form[]=[];
    constructor(private router:Router,private formationService:FormationService,private condidatService: CondidatService,private activatedRoute:ActivatedRoute) { }
    id!:string;
    f!:Formation;

    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
     this.formationService.getformationbyid(this.id).subscribe(data=>this.f=data);
    }
     dejasinscrir(f:Formation){
      this.x=f.candidat;
      return (this.x.filter(e=>e.id=this.condidatService.getuser().id).length==0)
      
   }
    sinscrire(f:Formation){
      this.x=f.candidat
      this.x.push(this.condidatService.getuser());
      this.formationService.patchformation(f.id,{candidat:this.x}).subscribe() 
    }
}

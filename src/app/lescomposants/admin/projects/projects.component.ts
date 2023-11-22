import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/lesclasses/formation';
import { FormationService } from 'src/app/lesservices/formation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  constructor(private router:Router,private formationService:FormationService) { }
  lesformation:Formation[]=[];
  getFormation(){
    this.formationService.getformation().subscribe (data=>this.lesformation=data) }
  
  ngOnInit(): void {
    this.getFormation()
    throw new Error('Method not implemented.');
  }
  ajouter(){
    this.router.navigate(['/ajouter']);
  }
  modifier(f:Formation){
    this.formationService.setf(f)
    this.router.navigate(['/modifier']);
  }
  effacer(id:string){
    this.formationService.deleteformation(id).subscribe((data: any) => window.location.reload());
  }
}

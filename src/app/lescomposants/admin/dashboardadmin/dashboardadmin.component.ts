import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/lesclasses/formation';
import { FormationService } from 'src/app/lesservices/formation.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit{
  
  
  constructor(private router:Router,private formationService:FormationService) { }
  lesformation:Formation[]=[];
  getFormation(){
    this.formationService.getformation().subscribe (data=>this.lesformation=data) }
  
  ngOnInit(): void {
    this.getFormation()
    throw new Error('Method not implemented.');
  }
  ajouter(){
    this.router.navigate(['/admin/ajouter']);
  }
  modifier(f:Formation){
    this.formationService.setf(f)
    this.router.navigate(['/admin/modifier']);
  }
  effacer(id:string){
    this.formationService.deleteformation(id).subscribe((data: any) => window.location.reload());
  }
}

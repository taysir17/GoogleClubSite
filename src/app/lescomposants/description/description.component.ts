import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { CondidatService } from 'src/app/lesservices/condidat.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit{
  nom!:string;
  user!:Form
  constructor(private router:Router,private condidatService: CondidatService) { }
  ngOnInit(): void {
    this.user=this.condidatService.getuser();
    this.nom=this.user.nometprenom;
  }


}

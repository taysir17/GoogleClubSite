import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { Formation } from 'src/app/lesclasses/formation';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { FormationService } from 'src/app/lesservices/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
 
  
 @Input() f!:Formation;

  
 
   
 }
 
 
  
 



import { Component, Input, OnInit } from '@angular/core';

import { Formation } from 'src/app/lesclasses/formation';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
 
  
 @Input() f!:Formation;

  
 
   
 }
 
 
  
 



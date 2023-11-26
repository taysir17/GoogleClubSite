import { Component, Input } from '@angular/core';
import { Formation } from 'src/app/lesclasses/formation';

@Component({
  selector: 'app-formationadmin',
  templateUrl: './formationadmin.component.html',
  styleUrls: ['./formationadmin.component.css']
})
export class FormationadminComponent {
  @Input() f!:Formation;
}

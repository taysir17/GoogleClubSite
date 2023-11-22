import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  constructor(private router:Router) { }

  Signup(){
    this.router.navigate(['/interface/formulaire']);
  }
  login(){
    this.router.navigate(['/interface/login']);
  }
}

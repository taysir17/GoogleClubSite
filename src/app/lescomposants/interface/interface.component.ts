import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CondidatService } from 'src/app/lesservices/condidat.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  constructor(private router:Router,private condidatService:CondidatService) { }
  ngOnInit(): void {
    this.condidatService.resetauthentificated()
   }

  Signup(){
    this.router.navigate(['/interface/formulaire']);
  }
  login(){
    this.router.navigate(['/interface/login']);
  }

}

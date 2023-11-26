import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { CondidatService } from 'src/app/lesservices/condidat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  nom!:string;
  profile!:string;
  user!:Form;
  constructor(private router:Router,private condidatService: CondidatService) { }
  ngOnInit(): void {
    this.user=this.condidatService.getuser();
    this.nom=this.user.nometprenom;
    this.profile=this.user.photo;
  }

  logout(){
    this.router.navigate(["/interface"]);
    this.condidatService.logout()
  }

}

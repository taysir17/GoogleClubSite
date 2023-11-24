import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/lesclasses/form';
import { Router } from '@angular/router';
import { CondidatService } from 'src/app/lesservices/condidat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  nom!:string;
  user!:Form;
  constructor(private router:Router,private condidatService: CondidatService) { }
  ngOnInit(): void {
    this.user=this.condidatService.getuser();
    this.nom=this.user.nometprenom;
  }
  divVisible: boolean = false;
  logout(){
    this.router.navigate(["/interface"]);
    this.condidatService.logout()
  }

  affiche() {
    this.divVisible = !this.divVisible;
    console.log(this.divVisible)
  }
}


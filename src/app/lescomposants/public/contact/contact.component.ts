import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/lesclasses/form';
import { CondidatService } from 'src/app/lesservices/condidat.service';
import { MessageService } from 'src/app/lesservices/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message!: FormGroup;
  user!:Form;
  
  constructor(private router:Router,private condidatService:CondidatService,private messageService:MessageService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.getLocation();
    this.user=this.condidatService.getuser()
   
    this.message = this.formBuilder.nonNullable.group({
      msg:["",Validators.required],
      user:[this.user]
    
      
    
      
    });
  }
  onSubmit() {
    
    alert("message envoyer")
    this.messageService.addmessage(this.message.value).subscribe()
    this.message.reset()
  }
  

  imgSrc: string | null = null;
  apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Remplacez par votre clé API

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  }

  showPosition(position: GeolocationPosition) {
    const latlon = position.coords.latitude + "," + position.coords.longitude;
    this.imgSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&sensor=false&key=${this.apiKey}`;
  }
}

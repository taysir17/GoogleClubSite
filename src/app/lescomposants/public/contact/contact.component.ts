import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  imgSrc: string | null = null;
  apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Remplacez par votre clé API

  ngOnInit(): void {
    this.getLocation();
  }

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

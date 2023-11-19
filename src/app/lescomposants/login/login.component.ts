import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CondidatService } from 'src/app/lesservices/condidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  condidat!: FormGroup;

  constructor(private formBuilder: FormBuilder, private condidatService: CondidatService) { }

  ngOnInit(): void {
    this.condidat = this.formBuilder.group({
      id: [0],
      email: ['exemple@gmail.com'],
      password: ['123@hjfdhs']
    });
  }

 
}

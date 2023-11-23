import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '../lesclasses/form';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/formulaire"

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  constructor(private http:HttpClient){}
  
    getcondidat():Observable<Form>{
      return this.http.get<Form>(URL);
      }
    login(email:String):Observable<Form[]>{
      return this.http.get<Form[]>(URL+"?email="+email)
    }
    
  addcondidat(p:Form):Observable<Form>{
    return this.http.post<Form>(URL, p);
    }
    
}

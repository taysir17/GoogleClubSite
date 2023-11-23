import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '../lesclasses/form';
import { Observable } from 'rxjs';
const URL = "http://localhost:3000/formulaire"

@Injectable({
  providedIn: 'root'
})
export class CondidatService {
  private user!:Form;
  private authentificated=0;
  constructor(private http: HttpClient) { }

  getuser(){
    return this.user;
  }
  setuser(u:Form){
      this.user=u;

  }
  patchcondidat(id:string, data:any):Observable<Form>{
    return this.http.patch<Form>(URL+"/"+ id, data);
    }
  getcondidat(): Observable<Form> {
    return this.http.get<Form>(URL);
  }

  addcondidat(p: Form): Observable<Form> {
    return this.http.post<Form>(URL, p);
  }
  login(data:Form[]) {
    if(data.length!=0){
      if(data[0].role=="public")
      this.authentificated=1;
    else
    this.authentificated=2
    }
   
      return this.authentificated
    
  }
  public isAuthenticated() {
    return this.authentificated;
  }
  cherchercandidat(email:string,pwd:string):Observable<Form[]>{

    return this.http.get<Form[]>(URL+"?email="+email+"&password="+pwd);
  }

}

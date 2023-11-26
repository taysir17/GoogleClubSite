
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '../lesclasses/form';
import { Observable } from 'rxjs';
import { Formation } from '../lesclasses/formation';
const URL="http://localhost:3000/formation"
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  constructor(private http:HttpClient){}
  patchformation(id:string, data:any):Observable<Formation>{
    return this.http.patch<Formation>(URL+"/"+ id, data);
    }
  getformation(info:string):Observable<Formation[]>{
    return this.http.get<Formation[]>(URL+info);
    }
  addformation(p:Formation):Observable<Formation>{
    return this.http.post<Formation>(URL, p);
    }
  getformationbyid(id:string):Observable<Formation>{
    return this.http.get<Formation>(URL+"/"+id);
  }
  updateformation(id:string,f:Formation):Observable<Formation>{
    return this.http.put<Formation>(URL+"/"+id,f); }
  deleteformation(id:string){
    return this.http.delete(URL+"/"+id);
  }
    id:string="";
  f!:Formation;
  getf(){
    return this.f;
  }
  setf(f:Formation){
    this.f=f;
  }
  
}

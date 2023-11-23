import { CanActivateFn } from '@angular/router';
import { CondidatService } from './lesservices/condidat.service';
import { inject } from '@angular/core';

export const publicGuard: CanActivateFn = (route, state) => {
 const condidatService=inject(CondidatService);
 if(condidatService.isAuthenticated()==1){
  return true
 }
 else{
  return false
 }
};

import { CanActivateFn, Router } from '@angular/router';
import { CondidatService } from './lesservices/condidat.service';
import { inject } from '@angular/core';

export const publicGuard: CanActivateFn = (route, state) => {
 const condidatService=inject(CondidatService);
 const router = inject(Router);
 if(condidatService.isAuthenticated()==1){
  return true
 }
 else{
    router.navigate(["/erreur"])
  return false
 }
};

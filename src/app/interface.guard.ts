import { CanActivateFn, Router } from '@angular/router';
import { CondidatService } from './lesservices/condidat.service';
import { inject } from '@angular/core';

export const interfaceGuard: CanActivateFn = (route, state) => {
  const condidatService=inject(CondidatService);
  const router = inject(Router);
  if(condidatService.isAuthenticated()==0){
   return true
  }
  else{
    router.navigate(["./"])
   return false
  }
};

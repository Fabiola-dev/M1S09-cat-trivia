import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionService } from '../services/connection.service';

@Injectable({
  providedIn: 'root'
})
export class AcessoGuard implements CanActivate {

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): 
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree { 
      if (this.connectionService.isUserConnected()) {
        return true;
      } else
      this.router.navigate(["sem-acesso"]);
      return true;
  }  
}

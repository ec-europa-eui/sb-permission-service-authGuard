import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import {
    UxAppShellService,
    EuiPermissionService
} from '@eui/core';
import {  of, zip , pipe, map, filter} from 'rxjs';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private router: Router,
                private euiPermissionService: EuiPermissionService,
                private uxService: UxAppShellService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // filtering this Observable makes sure that it will emit once the
        // AppStarter service has finished will initialization of other services.
            const isLoggedIn = true; // you can provide this information from your service
    
            // Checks login. If It is not, It redirects user.
            if (isLoggedIn) {
                // Checks route right based on permission data and returns false/true We are using route->data
                if (this.euiPermissionService.checkRight(route.data.id)) {
                    return true;
                } else {
                    this.uxService.growlWarning('You don\'t have the permission access this page');
                }
            } else {
    
                // Giving feedback to user and redirecting here.
                this.uxService.growlWarning('You have to login to access this page');
                this.router.navigate(['/login']);
            }
    
          
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // If You are handling child routes different way, You can customise here.
        return this.canActivate(route, state);
    }
}
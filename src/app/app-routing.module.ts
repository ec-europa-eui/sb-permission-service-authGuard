import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
    { path: '', redirectTo: 'screen/home', pathMatch: 'full' },
    { path: 'index.jsp', redirectTo: 'screen/home' },
    { path: 'screen/home', loadChildren: () => import('./features/home/home.module').then(m => m.Module), canActivate: [AuthGuardService] },
    { path: 'screen/module1', loadChildren: () => import('./features/home/module1/module1.module').then(m => m.Module),canActivate: [AuthGuardService]  },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule {}

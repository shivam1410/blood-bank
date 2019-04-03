import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    // {path: '', component: AppComponent},
 { path: '', component: UserComponent},
 {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {
    constructor() {}
}
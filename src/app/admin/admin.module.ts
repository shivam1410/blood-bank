import { NgModule } from '@angular/core';


import {MatFormFieldModule, MatInputModule} from '@angular/material'; 



import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      AdminComponent,
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatCardModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

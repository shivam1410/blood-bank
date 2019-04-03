import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './shared/firebase.service';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    NgDragDropModule.forRoot(),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule, CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatCardModule,
    MatFormFieldModule,MatInputModule,
    DragDropModule,
    MatButtonModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

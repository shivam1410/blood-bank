import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../shared/firebase.service';
import { element } from '@angular/core/src/render3/instructions';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  bloodForm: FormGroup;
  bloodData: any[];
  defaultData = "Hello"
  constructor(private firebaseServices: FirebaseService ){
    this.bloodForm = new FormGroup({
      'O+': new FormControl(),
      'O-': new FormControl(),
      'A+': new FormControl(),
      'A-': new FormControl(),
      'B+': new FormControl(),
      'B-': new FormControl(),
      'AB+': new FormControl(),
      'AB-': new FormControl(),
    });
  }

  ngOnInit(){
  this.firebaseServices.getBlood().subscribe(
    (data) => {
      console.log(data)
      // this.bloodData = data
      // data.(element => {
      //   this.bloodForm.patchValue({[element['type']]:element['value']})
      // });
      Object.keys(data).forEach(key => this.bloodForm.patchValue({[key]:data[key]['value']}))
    }, (err)=>{
      console.log(err);
    });
}
onSubmit(){
  // console.log(this.bloodForm.value);
  this.firebaseServices.saveValues(this.bloodForm.value)

}

}
// 'OPLUS': new FormControl(this.bloodData['OPLUS']),
//     'OMINUS': new FormControl(this.bloodData['OMINUS']),
//     'APLUS': new FormControl(this.bloodData['APLUS']),
//     'AMINUS': new FormControl(this.bloodData['AMINUS']),
//     'BPLUS': new FormControl(this.bloodData['BPLUS']),
//     'BMINUS': new FormControl(this.bloodData['BMINUS']),
//     'ABPLUS': new FormControl(this.bloodData['ABPLUS']),
//     'ABMINUS': new FormControl(this.bloodData['ABMINUS']),
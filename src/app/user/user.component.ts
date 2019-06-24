import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  enquiryForm: FormGroup;
  need: number;
  collectedBlood: number = 0;
  collectedBloodList: any[] = [];
  bloodData: any[];
  constructor(private fireService: FirebaseService) {
    this.enquiryForm = new FormGroup({
      'type': new FormControl(),
      'value': new FormControl()
    });
   }
   updatedBlood: any[] = [];
  ngOnInit() {
    this.fireService.getBlood()
    .subscribe(data => {
          const arr = [];
          console.log(data);

          // data.forEach(element => arr.push({
          //   type:element['type'],
          //   value:element['value'],
          //   canDonate: Boolean
          // }));
          Object.keys(data).filter(a => !!a).map(key => {
          arr.push({type:key,
            value:data[key]['value'],
          canDonate: false})
        })
          this.bloodData = arr;
          console.log(this.bloodData)
      });
      if (!this.need) {
        console.log('bshdeb')
      }
  }
  check() {
    this.collectedBlood = 0;
    this.collectedBloodList = [];
    this.need = this.enquiryForm.controls.value.value;
    if(this.enquiryForm.controls.type.value === 'O+')
    {
      this.bloodData.forEach(element => {
        if(element['type'] === 'O+' || element['type'] ==='O-'){
          element['canDonate'] = true;
        } else {
          element['canDonate'] = false;
        }
      });
    }
    if(this.enquiryForm.controls.type.value === 'O-')
    {
      this.bloodData.forEach(element =>{
        if (element['type'] === 'O-'){
          element['canDonate'] = true;
        } else {
          element['canDonate'] = false;
        }
      });

    }if (this.enquiryForm.controls.type.value === 'A+') {
      this.bloodData.forEach(element =>{
        if (element['type'] === 'O-' || element['type'] === 'O+' || element['type'] === 'A+' || element['type'] === 'A-'){
          element['canDonate'] = true;
        } else {
          element['canDonate'] = false;
        }
      });

    }if (this.enquiryForm.controls.type.value === 'A-') {
      this.bloodData.forEach(element =>{
        if (element['type'] === 'O-' || element['type'] === 'A-'){
          element['canDonate'] = true;
        } else {
          element['canDonate'] = false;
        }
      });
    }if (this.enquiryForm.controls.type.value === 'B+') {
      this.bloodData.forEach(element =>{
        if (element['type'] === 'O-' || element['type'] === 'O+' || element['type'] === 'B+' || element['type'] === 'B-'){
          element['canDonate'] = true;
        } else {
          element['canDonate'] = false;
        }
      });
    }if (this.enquiryForm.controls.type.value === 'B-') {
      this.bloodData.forEach(element =>{
        if (element['type'] === 'O-' || element['type'] === 'B-'){
          element['canDonate'] = true;
        } else {
          element['canDonate'] = false;
        }
      });

    }if (this.enquiryForm.controls.type.value === 'AB+') {
      this.bloodData.forEach(element =>{
        element['canDonate'] = true;
      });
    }if (this.enquiryForm.controls.type.value === 'AB-') {
      this.bloodData.forEach(element =>{
        if (element['type'] === 'O-' || element['type'] === 'B-' || element['type'] === 'A-' || element['type'] === 'AB-' ){
          element['canDonate'] = true;
        } else {
          element['canDonate'] = false;
        }
      });
    }
  console.log(this.bloodData)
  }

  onItemDrop(ev) {
    const data = ev.dragData;
  this.checkConditions(data);
  }
  checkConditions(data) {
    console.log(data)
    if (this.need <= data['value']) {
      this.collectedBloodList.push({
        type: data['type'],
        value: data['value']
      });
      data['value'] = data['value'] - this.need;
     
      this.updatedBlood.push({[data['type']]:{value:data['value']}});
      this.collectedBlood = this.need;
      
      this.need = 0;
      this.enquiryForm.controls.value.patchValue(0);
      this.fireService.updateValues(this.updatedBlood);

    }
    if (this.need > data['value']) {
      this.need = this.need - data['value'];
      this.collectedBlood = this.collectedBlood + data['value'];
      this.collectedBloodList.push({
        type: data['type'],
        value: data['value']
      });
      data['value'] = 0;
      this.updatedBlood.push({[data['type']]: {value: data['value']}});
      this.enquiryForm.controls.value.patchValue(this.need);
    }
  }

}

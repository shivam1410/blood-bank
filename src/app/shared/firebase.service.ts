import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, DatabaseSnapshot } from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private datasnap: DatabaseSnapshot<any>;

    constructor(private fireDb: AngularFireDatabase, ){}

    getBlood() {
        return this.fireDb.object('/blood').valueChanges();
    }

    saveValues(bloodData) {
        const $key = this.fireDb.database.ref('blood');
        Object.keys(bloodData).map(key => {
        this.fireDb.database.ref(`blood/${key}`).update({value: bloodData[key]})

        })
    }
    updateValues(data) {
        console.log(data)
        data.forEach(element => {
            console.log(element)
            this.fireDb.database.ref(`blood`).update(element);
        });
    }
}
## the Web-App

link for live Demo: blood-bank[https://shivam1410.github.io/blood-bank/] &nbsp;
i have used material library to create inputs-forms, buttons and cards&nbsp;
a separate lazily loaded modules for admin is provided, which take input from the admin for different blood groups, and update them instantaneously to the firebase realtime-database.\
In the main app, an enquiry form is provided which will take input from user and highight the required blood group(s) in light-green color and dark-green color, if any bottle is empty the bottle is shown in ligh-green color.and only the bottles which have the blood are shown in dark-green color.\
\
\
\
let suppose, if you want 6 unit blood of A+ group, and you have {A+ = 0, A- = 2, O+ = 3, O- = 2}\
then app will highlight A+ in light green and {A-, O+, O-} in dark green , and will make them draggable. because all three can be taken. and we can simply drag them to the bucket.  when we get the needed blood App will update them to firebase databse. and reload the values to bottles.


# Intro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Used Libraries or Frameworks

###
i have used angular cli version 6.2.9 to develop this peoject. I have used basic angular modules like,\
    ***formModule,\
    reactiveFormModule,\
    commonModule***.
###
for making admin pannel I used,\
    ***MatFormFieldModule,\
    MatInputModule,\
    MatCardModule,\
    MatButtonModule***.
###
for making the Enquiry pannel i used,\
    ***MatCardModule,\
    MatFormFieldModule,\
    MatInputModule,\
    ngDragDropModule,\
    MatButtonModule***.
###
for backend that will store blood data i used ***firebase***. and to connect firebase with angular i've used,\
    ***AngularFireModule,\
    AngularFireDatabaseModule***.
    
## Plus point

To optimize the app,  i have lazily loded the admin module, admin module will be loded only when the <<--url-->>/admin is typed.\
I have used material provided by google which gives very neet and clean styles.\
i have used firebase as databse,  which provide very fast real-time databsse.

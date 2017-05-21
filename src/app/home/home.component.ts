import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/** Fire Base import */
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    moduleId: module.id,
    templateUrl: './home.component.html',
})

export class HomeComponent {

    /** Login value */
    model: any = {};

    constructor(public afAuth: AngularFireAuth,private router: Router) {
    }

    ngOnInit() {
    }


    logout() {
        this.afAuth.auth.signOut()
            .then((authState: AngularFireAuth) => {
                console.log('Logout Success');
                this.router.navigateByUrl("/login");
                return authState;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
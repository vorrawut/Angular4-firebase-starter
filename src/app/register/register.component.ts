import { Component } from '@angular/core';
import { Router } from '@angular/router';

/** Fire Base import */
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['./register.scss']
})

export class RegisterComponent {
    /** Login value */
    model: any = {};

    constructor(public afAuth: AngularFireAuth, private router: Router) {
    }

    ngOnInit() {
    }

    register(model: any) {
        return this.afAuth.auth.createUserWithEmailAndPassword(
            model.email,
            model.password
        )
            .then((authState: AngularFireAuth) => {
                console.log('Register Success');
                this.router.navigateByUrl('/home');
                return authState;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

}

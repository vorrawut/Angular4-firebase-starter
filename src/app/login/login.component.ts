import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/** Fire Base import */
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.scss']
})

export class LoginComponent {

    /** Login value */
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        // reset login status
        this.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // This function was signin from firebase then check status.
    login(model: any) {
        console.log('model : ' + JSON.stringify(this.model));
        this.afAuth.auth.signInWithEmailAndPassword(this.model.email, this.model.password)
            .then((authState: AngularFireAuth) => {
                console.log('Login Success');
                this.router.navigateByUrl("/home");
                return authState;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    // This function was signout from firebase then check status.
    logout() {
        this.afAuth.auth.signOut()
            .then((authState: AngularFireAuth) => {
                console.log('Logout Success');
                return authState;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}

import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isSignedin$: BehaviorSubject<boolean>;

    constructor(private authService: AuthService) {
        this.isSignedin$ = this.authService.signedin$;
    }

    ngOnInit() {
        this.authService.checkAuth().subscribe(() => {});
    }
}
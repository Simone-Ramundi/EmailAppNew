import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import { take, skipWhile} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService) {}

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.signedin$.pipe(
            skipWhile(value => value === null),
            take(1)
        );

    }
}

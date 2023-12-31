import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Modify or log the outgoing request
        const modifiedReq = req.clone({
            withCredentials: true
        });
        return next.handle(modifiedReq);
        /*.pipe(
            filter(val => val.type === HttpEventType.Sent),
            tap(val => {
                /* if(val.ty === HttpEventType.Sent) {
                    console.log('Request was sent to server')
                }
                if(val.type === HttpEventType.Response) {
                    console.log('Got a response from the API', val)
                }
                    console.log('Sent the request')
                })
            ); */
    }
}
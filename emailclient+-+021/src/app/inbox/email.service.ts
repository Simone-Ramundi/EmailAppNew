import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Email} from "./email";

interface EmailSummary {
    id: number;
    subject: string;
    from: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    rootUrl = "https://api.angular-email.com";

    constructor(private http: HttpClient) {
    }

    getEmails() {
        return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`, {})
    }

    getEmail(id: string) {
        return this.http.get<Email>(`${this.rootUrl}/emails/${id}`, {})
    }

    sendEmail(email: Email){
        debugger
        if (typeof email.text !== 'string') {
            console.log("missing text or not a string")
            return
        }
        console.log("Email Sent")
        return this.http.post(`${this.rootUrl}/emails`, email,)
    }
}

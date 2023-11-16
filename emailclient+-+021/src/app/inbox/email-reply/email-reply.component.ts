import {Component, Input, OnChanges} from '@angular/core';
import {Email} from "../email";
import {EmailService} from "../email.service";

@Component({
    selector: 'app-email-reply',
    templateUrl: './email-reply.component.html',
    styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnChanges {
    showModal = false;
    @Input() email: Email;
    constructor(private emailService: EmailService) {
    }

    ngOnChanges() {
        console.log('Original email:', this.email);

        const text = this.email.text.replace(/\n/gi, '\n> ');

        this.email = {
            ...this.email,
            from: this.email.to,
            to: this.email.from,
            subject: `RE: ${this.email.subject}`,
            text: `\n\n\n--------${this.email.from} wrote:\n> ${text}`
        }

        console.log('Modified email:', this.email);
    }
    onSubmit(email: Email){
    this.emailService.sendEmail(email).subscribe(()=>{
        this.showModal = false
    });
    }

    protected readonly onpageshow = onpageshow;
    protected readonly onsubmit = onsubmit;
}

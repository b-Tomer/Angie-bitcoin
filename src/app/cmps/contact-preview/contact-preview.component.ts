import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
    @Input() contact!: Contact
    @Output() removeContact = new EventEmitter<string>()

    constructor(private router: Router) { }

    onRemoveContact(ev: MouseEvent) {
        this.removeContact.emit(this.contact._id)
    }

    onDetails() {
        this.router.navigateByUrl(`contact/${this.contact._id}`)
    }
}

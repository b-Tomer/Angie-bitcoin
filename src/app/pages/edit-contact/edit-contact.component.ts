import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: Contact | any
  contactId!: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactId = params['id']
    })

    if (this.contactId) {
      this.contactService.getContactById(this.contactId).subscribe(
        (contact: Contact) => {
          this.contact = contact;
        },
        (error) => {
          console.error('Error retrieving contact:', error)
        }
      )
    } else {
      this.contact = this.contactService.getEmptyContact()
      console.log('this.contact: ', this.contact)
    }
  }

  save() {
    this.contactService.saveContact(this.contact).subscribe(
      () => {
        this.router.navigate(['/contact'])
      },
      (error) => {
        console.error('Error saving contact:', error)
      }
    )
  }
}


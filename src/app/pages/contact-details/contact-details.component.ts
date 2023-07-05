import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, User } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private userService: UserService,
  ) { }
  user: User = <User>{};
  moves: any[] = [];
  contactId!: string
  contact: Contact = this.contactService.getEmptyContact()
  transferInput: number = 0
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactId = params['id']
    })

    this.userService.user$.subscribe((user: User) => {
      this.user = user
      this.moves = user.moves.filter(
        (move) => move.toId === this.contact._id
      )
      console.log('this.moves: ', this.moves )
    })

    this.contactService.getContactById(this.contactId).subscribe(
      (contact: Contact) => {
        this.contact = contact;
        console.log('this.contact: ', this.contact);
      },
      (error) => {
        console.error('Error retrieving contact:', error)
      }
    )
  }

  public onTransfer() {
    this.userService.addMove(this.contact, this.transferInput)
  }
}






import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { take } from 'rxjs';
const USER_KEY = 'user'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    constructor(private contactService: ContactService) { }

    title = 'contacts-async'

    ngOnInit(): void {
        this.contactService.query()
            .pipe(take(1))
            .subscribe({
                error: err => {
                    console.log('err:', err)
                }
            })
    
            localStorage.removeItem(USER_KEY)

        }

}

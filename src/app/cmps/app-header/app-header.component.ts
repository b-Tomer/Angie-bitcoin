import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/contact.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent {
  rateToShow: Promise<number> = this.bitcionService.getRate()

  constructor(
    private bitcionService: BitcoinService,
    private userService: UserService,
    // public _user: User
  ) { }
  user$!: Observable<User>;

  @Output() switchTheme = new EventEmitter();

  async ngOnInit() {
    this.userService.getUser();
    this.user$ = this.userService.user$;
 
  }

  
  isUserConnected(): boolean {
    let user: any = null
    user = localStorage.getItem('user')
    if (user) return true
    else return false  
  }



}

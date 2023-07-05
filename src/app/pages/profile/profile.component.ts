import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/contact.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = <User>{};
  moves: any[] = [];
  rateToShow: Promise<number> = this.bitcionService.getRate()

  constructor(
    private userService: UserService,
    private bitcionService: BitcoinService,
    ) { }

  ngOnInit(): void {
    this.userService.user$.subscribe((user: User) => {
      this.user = user
      this.moves = user.moves
    })

    this.userService.getUser().subscribe(
      (user: User) => {
        this.user = user
        this.moves = user.moves
      },
      (error) => {
        console.error('Error retrieving user:', error)
      }
    )
  }

  public onDeposit(amount: number): void {
    // this.userService.deposit(amount);
  }
}

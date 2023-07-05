import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/contact.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = <User>{};
  moves: any[] = [];

  constructor(private userService: UserService) { }

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

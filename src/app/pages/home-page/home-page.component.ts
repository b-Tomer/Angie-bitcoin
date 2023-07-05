import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  public user: string = ''
  public error: boolean = false


  async onSaveUser(): Promise<any> {
    if (!this.user) {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 5000)
      return
    }

    await lastValueFrom(this.userService.signup(this.user))
    this.router.navigateByUrl('contact')
  }

}

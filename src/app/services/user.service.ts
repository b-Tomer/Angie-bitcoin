import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Contact, User } from '../models/contact.model';
import { storageService } from './async-storage.service';
import { storeService } from './storeService';

const USER_KEY = 'user'


@Injectable({
    providedIn: 'root'
})

export class UserService {
    private _userDb: User | any = storageService.query(USER_KEY) 
    private _user$ = new BehaviorSubject<User>(<User>{})

    public user$ = this._user$.asObservable()

    public getUser() {
        this._user$.next(this._userDb);
        return of(this._userDb)
    }

    public signup(name: string) {
        const user: User = {
            _id: 'lol1',
            name,
            balance: 100,
            moves: []
        }
        storageService.post(USER_KEY, user)
        this._user$.next(user);
        return of(user)
    }

    public logout() {
        localStorage.removeItem(USER_KEY)
    }


    public addMove(contact: Contact, amount: number): Observable<any> | void {
        let user =  storeService.load(USER_KEY)
        if (Array.isArray(user)) {
            user = user[0] 
          }
          
          if (!user) {
          
            return
          }
        if(user.balance < amount || !amount) return
        user.balance -= amount
        const move = {
          toId: contact._id,
          to: contact.name,
          at: Date.now(),
          amount
        }
        console.log('user: ', user )
        user.moves.unshift(move)
        storeService.store(USER_KEY, user)
        this._userDb = user
        this._user$.next(user);
        return of(user)
      }
    
      public deposite(amount: number) {
        const user =  storeService.load(USER_KEY)
        user.balance += amount
        storeService.store(USER_KEY, user)
        this._user$.next(user);
      }

}


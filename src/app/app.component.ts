import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setUser } from './ngrx/actions/user.action';
import { LocalStorageService } from './services/LocalStorage/localStorage.service';
import { UserService } from './services/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<number>

  title = 'Today';

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly userService: UserService,
    private store: Store<{ user: number }>
  ) {
    this.user$ = store.select('user');
  }

  ngOnInit() {
    const todayUUID = this.localStorageService.getUserId();
    console.log('::  todayUUID', todayUUID);

    if (todayUUID === null) {
      this.userService.createEmptyUser().subscribe(response => {
        // this.localStorageService.setUserId(response.body.id);
        this.store.dispatch(setUser({ user: response.body }));
      });
    } else {
      this.userService.getUserById({ userId: todayUUID}).subscribe(r => {
        // this.store.dispatch(setUser({ user:  }));
        // console.log('r:', r);
      });
    }
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './services/LocalStorage/localStorage.service';
import { UserService } from './services/User/user.service';
import UserStore from './store/User/user.store';

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
    private userStore: UserStore
  ) {}

  ngOnInit() {
    const todayUUID = this.localStorageService.getUserId();
    console.log('::  todayUUID', todayUUID);

    if (todayUUID === null) {
      this.userService.createEmptyUser().subscribe(response => {
        this.localStorageService.setUserId(response.body.id);
        this.userStore.setUser({ user: response.body });
      });
    } else {
      this.userService.getUserById({ userId: todayUUID }).subscribe(r => {
        this.userStore.setUser({ user: r.body });
      });
    }
  }
}

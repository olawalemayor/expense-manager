import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginUser } from 'src/app/state/app.actions';
import { errorSelector, AppState } from '../../state/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  isPasswordToggled = false;

  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  setVisibility() {
    this.isPasswordToggled = !this.isPasswordToggled;
    this.passwordInput.nativeElement.type = this.isPasswordToggled
      ? 'text'
      : 'password';
  }

  error$!: Observable<string>;

  loginUser() {
    const { username, password } = this.loginForm.value;

    username &&
      password &&
      this.store.dispatch(loginUser({ username, password }));
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(3)]],
      password: ['', [Validators.required]],
    });

    this.error$ = this.store.select(errorSelector);
  }
}

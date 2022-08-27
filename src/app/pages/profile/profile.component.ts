import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, userSelector } from '../../state/app.reducer';
import { getUser } from '../../state/app.actions';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  profileForm!: FormGroup<{
    name: FormControl<string | null>;
    picture: FormControl<string | null>;
    job_desc: FormControl<string | null>;
    location: FormControl<string | null>;
    dept: FormControl<string | null>;
  }>;

  subs = of();

  saveProfile() {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      job_desc: ['', [Validators.required]],
      location: ['', [Validators.required]],
      dept: ['', [Validators.required]],
    });

    // Get current user then autofill the form

    this.store.dispatch(getUser());

    this.store
      .select(userSelector)
      .pipe(takeUntil(this.subs))
      .subscribe((user) => {
        this.profileForm.setValue({
          dept: user.department,
          job_desc: user.job_description,
          location: user.location,
          name: user.name,
          picture: user.picture,
        });
      });
  }
}

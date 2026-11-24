import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, JsonPipe, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonModule,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);

  countries = ['France', 'Belgique', 'Suisse', 'Canada'];

  form = this.fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3)]],
    age: [null as number | null, [Validators.required, Validators.min(18)]],
    country: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  result: unknown = null;

  get fullname() { return this.form.controls.fullname; }
  get age() { return this.form.controls.age; }
  get country() { return this.form.controls.country; }
  get email() { return this.form.controls.email; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.result = this.form.getRawValue();
    console.log('Inscription (reactive) :', this.result);
  }
}

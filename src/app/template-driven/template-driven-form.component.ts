import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export interface Inscription {
  fullname: string;
  age: number | null;
  country: string;
  email: string;
}

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    FormsModule, JsonPipe, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonModule,
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  countries = ['France', 'Belgique', 'Suisse', 'Canada'];

  model: Inscription = { fullname: '', age: null, country: '', email: '' };

  result: Inscription | null = null;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.result = { ...this.model };
    console.log('Inscription (template-driven) :', this.result);
  }
}

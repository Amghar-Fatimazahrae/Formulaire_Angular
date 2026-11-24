import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTabsModule, TemplateDrivenFormComponent, ReactiveFormComponent],
  template: `
    <mat-tab-group>
      <mat-tab label="Exercice 1 - Template Driven">
        <app-template-driven-form />
      </mat-tab>
      <mat-tab label="Exercice 2 - Reactive Forms">
        <app-reactive-form />
      </mat-tab>
    </mat-tab-group>
  `,
})
export class AppComponent {}

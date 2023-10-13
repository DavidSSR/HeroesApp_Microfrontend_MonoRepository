import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [provideAnimations()],
})
export class AppComponent {
  title = 'mf-auth';
}

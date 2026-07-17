import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  animations: [
    trigger('heroEntrance', [
      transition(':enter', [
        query(
          '.hero-social-links, .hero-content, .profile-card',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger(150, [
              animate(
                '600ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class UserComponent {

}

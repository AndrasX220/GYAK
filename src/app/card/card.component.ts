// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() icon: string;
  @Input() showFooter: boolean = true;
  @Input() body: string;
}
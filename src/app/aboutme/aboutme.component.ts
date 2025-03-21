import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
constructor(private translate: TranslateService) {}
switchLang(language: string) {
  this.translate.use(language);
}
}

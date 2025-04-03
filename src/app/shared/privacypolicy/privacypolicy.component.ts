import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {

  constructor(private translate: TranslateService) {}
  switchLang(language: string) {
    this.translate.use(language);
  }
}

import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {

  constructor(private translate: TranslateService) {}
  switchLang(language: string) {
    this.translate.use(language);
  }
}

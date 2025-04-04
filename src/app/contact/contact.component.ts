import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateDirective, TranslatePipe, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private translate: TranslateService) {}
  switchLang(language: string) {
    this.translate.use(language);
  }
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isPolicyChecked: boolean = false;
  mailTest = false;

  post = {
    endPoint: 'https://dominik-marnet.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Validates the name field and updates the validation state.
   */
  validateName() {
    this.contactData.name = this.contactData.name.trim(); // Optional: trim whitespace
  }

  /**
   * Validates the email field using a regex pattern and updates the validation state.
   */
  validateEmail() {
    this.contactData.email = this.contactData.email.trim(); // Optional: trim whitespace
  }

  /**
   * Validates the message field and updates the validation state.
   */
  validateMessage() {
    this.contactData.message = this.contactData.message.trim(); // Optional: trim whitespace
  }

  /**
   * Returns the appropriate placeholder for the name field based on its state.
   */
  getNamePlaceholder(nameField: NgModel): string {
    if (nameField.touched && nameField.invalid) {
      return nameField.errors?.['required']
        ? 'Please enter your name'
        : 'Name must be at least 3 characters';
    }
    return 'Your name goes here';
  }

  /**
   * Returns the appropriate placeholder for the email field based on its state.
   */
  getEmailPlaceholder(emailField: NgModel): string {
    if (emailField.touched && emailField.invalid) {
      return emailField.errors?.['required']
        ? 'Please enter your email'
        : 'Enter a valid email address';
    }
    return 'youremail@email.com';
  }

  /**
   * Returns the appropriate placeholder for the message field based on its state.
   */
  getMessagePlaceholder(messageField: NgModel): string {
    if (messageField.touched && messageField.invalid) {
      return messageField.errors?.['required']
        ? 'Please enter your message'
        : 'Message must be at least 4 characters';
    }
    return 'Hello Dominik, I am interested in ...';
  }

  /**
   * Determines if the policy error message should be shown.
   * Returns true if all form fields are valid but the policy checkbox is unchecked.
   */
  showPolicyError(form: NgForm): boolean {
    const allFieldsValid =
      form.controls['name']?.valid &&
      form.controls['email']?.valid &&
      form.controls['message']?.valid;
    return allFieldsValid && !this.isPolicyChecked;
  }
  
  /**
   * Handles form submission, sending data via HTTP if valid and not in test mode.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.isPolicyChecked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.isPolicyChecked && this.mailTest) {
      ngForm.resetForm();
      this.resetForm();
    }
  }

  /**
   * Resets the form and validation states.
   */
  private resetForm() {
    this.contactData = { name: '', email: '', message: '' };
    this.isPolicyChecked = false;
  }
}

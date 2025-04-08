import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateDirective, TranslatePipe, CommonModule, RouterLink, RouterModule],
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
  isMailSent: boolean = false;

  post = {
    endPoint: 'https://www.dominik-marnet.de/sendMail.php',
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
    this.contactData.name = this.contactData.name; 
  }

  /**
   * Validates the email field using a regex pattern and updates the validation state.
   */
  validateEmail() {
    this.contactData.email = this.contactData.email; 
  }

  /**
 * Determines if the email validation message should be displayed.
 * Shows the message if the email field is touched and invalid.
 * @param emailField - The NgModel instance of the email input field, or undefined.
 * @returns boolean - True if the message should be shown, false otherwise.
 */
showEmailValidationMessage(emailField: NgModel | undefined): boolean {
  // Guard against undefined or null emailField
  if (!emailField) {
    return false; // Hide message if emailField isn’t available
  }

  // Safely check touched and invalid properties
  return emailField.touched === true && emailField.invalid === true && !this.isMailSent;
}

  /**
   * Returns the appropriate validation message for the email field based on its state.
   * @param emailField - The NgModel instance of the email input field.
   * @returns string - The message to display under the email field.
   */
  getEmailValidationMessage(emailField: NgModel): string {
    if (emailField.errors?.['required']) {
      return this.translate.instant('contact.email-required') || 'Please enter your email';
    } else if (emailField.errors?.['pattern']) {
      return this.translate.instant('contact.email-invalid') || 'Enter a valid email address';
    }
    return ''; // Default case (shouldn't occur due to *ngIf)
  }

  /**
   * Validates the message field and updates the validation state.
   */
  validateMessage() {
    this.contactData.message = this.contactData.message;
  }

  /**
   * Returns the appropriate placeholder for the name field based on its state.
   */
  // getNamePlaceholder(nameField: NgModel): string {
  //   if (nameField.touched && nameField.invalid) {
  //     return nameField.errors?.['required']
  //       ? 'Please enter your name'
  //       : 'Name must be at least 3 characters';
  //   }
  //   return 'Your name goes here';
  // }

  /**
   * Returns the appropriate placeholder for the email field based on its state.
   */
  // getEmailPlaceholder(emailField: NgModel): string {
  //   if (emailField.touched && emailField.invalid) {
  //     return emailField.errors?.['required']
  //       ? 'Please enter your email'
  //       : 'Enter a valid email address';
  //   }
  //   return 'youremail@email.com';
  // }

  /**
   * Returns the appropriate placeholder for the message field based on its state.
   */
  // getMessagePlaceholder(messageField: NgModel): string {
  //   if (messageField.touched && messageField.invalid) {
  //     return messageField.errors?.['required']
  //       ? 'Please enter your message'
  //       : 'Message must be at least 4 characters';
  //   }
  //   return 'Hello Dominik, I am interested in ...';
  // }

  /**
   * Returns the appropriate placeholder for the name field based on its state.
   * @param nameField - The NgModel instance of the name input field.
   * @returns string - The translated placeholder text.
   */
  getNamePlaceholder(nameField: NgModel): string {
    if (nameField.touched && nameField.invalid) {
      return nameField.errors?.['required']
        ? this.translate.instant('contact.name-required') // "Please enter your name"
        : this.translate.instant('contact.name-minlength'); // "Name must be at least 3 characters"
    }
    return this.translate.instant('contact.name-placeholder'); // "Your name goes here"
  }

  /**
   * Returns the appropriate placeholder for the email field based on its state.
   * @param emailField - The NgModel instance of the email input field.
   * @returns string - The translated placeholder text.
   */
  getEmailPlaceholder(emailField: NgModel): string {
    if (emailField.touched && emailField.invalid) {
      return emailField.errors?.['required']
        ? this.translate.instant('contact.email-required') // "Please enter your email"
        : this.translate.instant('contact.email-invalid'); // "Enter a valid email address"
    }
    return this.translate.instant('contact.email-placeholder'); // "youremail@email.com"
  }

  /**
   * Returns the appropriate placeholder for the message field based on its state.
   * @param messageField - The NgModel instance of the message input field.
   * @returns string - The translated placeholder text.
   */
  getMessagePlaceholder(messageField: NgModel): string {
    if (messageField.touched && messageField.invalid) {
      return messageField.errors?.['required']
        ? this.translate.instant('contact.message-required') // "Please enter your message"
        : this.translate.instant('contact.message-minlength'); // "Message must be at least 4 characters"
    }
    return this.translate.instant('contact.message-placeholder'); // "Hello Dominik, I am interested in ..."
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
   * Sets isMailSent to true on successful submission.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.isPolicyChecked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response) => {
          this.isMailSent = true; // Set success flag on successful response
          ngForm.resetForm();
          this.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.isPolicyChecked && this.mailTest) {
      this.isMailSent = true; // Set success flag in test mode
      ngForm.resetForm();
      this.resetForm();
    }
  }

  /**
   * Resets the form and validation states, preserving isMailSent until a new interaction.
   */
  private resetForm() {
    this.contactData = { name: '', email: '', message: '' };
    this.isPolicyChecked = false;
    // isMailSent is not reset here to keep the success message visible until new input
  }
}

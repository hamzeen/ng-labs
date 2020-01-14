import { AbstractControl, FormControl } from '@angular/forms';
// import * as moment from 'moment/moment';

export class SimpleValidations {

  /**
   * <div *ngIf="myForm.get('websiteUrl').errors &&
        myForm.get('websiteUrl').dirty &&
        myForm.get('websiteUrl').errors.validUrl">
          Oops, only urls served over https and only from the .io top-level domain are accepted.
          Talk about restrictions!
     </div>
   */
  static validateUrl(control: AbstractControl) {
    if (!control.value.startsWith('https') || !control.value.includes('.io')) {
      return { validUrl: true };
    }
    return null;
  }

  /**
   * email validator
   */
  static emailDomainValidator(control: FormControl) {
    let email = control.value;
    if (email && email.indexOf("@") != -1) {
      let [_, domain] = email.split("@");
      if (domain !== "hamzeen.io") {
        return {
          emailDomain: {
            parsedDomain: domain
          }
        }
      }
    }
    return null;
  }

  static confirmPassword(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value &&
      control.parent.controls["password"].value &&
      control.parent.controls["password"].value === control.value) {
      return null;
    }
    return {passwordsDontMatch: true};
  }

  static ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
      return { 'ageRange': true };
    }
    return null;
  }

}

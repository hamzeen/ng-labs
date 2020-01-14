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
}

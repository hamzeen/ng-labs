import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

export const updateValidators = (control, validators) => {
  control.setValidators(validators);
  control.updateValueAndValidity({ onlySelf: true });
};

export const clearValidators = (controls: Array<FormControl | AbstractControl>) => {
  controls.forEach(control => updateValidators(control, null));
};

/*export const markFormGroupTouched = (formGroup: FormGroup) => {
  Object.keys(formGroup.controls).forEach((key) => {
    const control = formGroup.controls[key];
    control.markAsDirty();
    if ((control instanceof FormGroup)) {
      this.markFormGroupTouched(control);
    }
  });
};*/

export const markFormTouched = (form: FormGroup) => {
  Object.keys(form.controls).forEach(key => {
    const formControl = form.controls[key];

    if (formControl instanceof FormGroup) {
      markFormTouched(formControl);
    } else {
      formControl.markAsTouched();
    }
  });
};

import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SimpleValidations } from '../shared/validators/simple.validations';
import { markFormTouched } from '../shared/util/utilities';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title = 'ConTActs PaGE: tiTLE caSe';

  public formContact: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    const formFields = {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, SimpleValidations.emailDomainValidator]],
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl(''),
      language:['', Validators.required]
    };

    this.formContact = this.formBuilder.group(formFields);

    this.formContact.controls["password"].setValidators([Validators.required]);
    this.formContact.controls["confirmPassword"].setValidators([SimpleValidations.confirmPassword]);

    this.formContact.controls['password']
      .valueChanges
      .subscribe((value) => {
        this.formContact.controls['confirmPassword'].updateValueAndValidity();
      });

    this.formContact.setValue({
      'firstName': 'danny van',
      'lastName': 'laar',
      'email': 'abq@hamzeen.io',
      'password': 'aa',
      'confirmPassword': 'bb',
      'language': 'spanish'
    });

  }

  onSubmit() {
    markFormTouched(this.formContact);
    if (this.formContact.valid) {
      console.log(this.formContact.value);
      // this.userService.createUser(this.user);
      // this.userForm.reset();
    } else {
      console.log('Please correct the form before you submit it');
    }
  }
}

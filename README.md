# NgLabs
This project is created with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.0; [Typescript](https://www.typescriptlang.org) version 2.3.4.

## About JWT


## JWT FE
* GOLD: https://medium.com/@amcdnl/authentication-in-angular-jwt-c1067495c5e0
* https://blog.angular-university.io/angular-jwt-authentication/
* https://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial

## JWT Backend
* https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens


## CORS issue in Express Porjects
* https://betterprogramming.pub/how-to-handle-cors-in-an-angular2-and-node-express-applications-eb3de412abef
* https://morioh.com/p/b8862a4df905

## SCSS structure
https://stackoverflow.com/questions/50878691/how-to-import-sass-files-in-angular-6/52990124


## Promises in the wild!
* https://davidwalsh.name/promises

## HACKS

```
<div [ngSwitch]="data.type">
  <div *ngSwitchCase="data.type === 'multi-choice' || data.type === 'singe-choice' ? data.type : '' ">FORM 1</div>
  <div *ngSwitchCase="'range'">FORM 2</div>
</div>
```
## SASS/Bootstrap

```
# initial project generation
ng new my-sassy-app --style=scss
# later
ng set defaults.styleExt scss
ng config defaults.styleExt = scss

// .angular-cli.json
"defaults": {
  "styleExt": "scss",
  "component": {
  }
}
```
   * Bootstrap: https://medium.com/@tiboprea/add-bootstrap-4-with-its-sass-files-in-an-angular-5-project-3c8f7fcc0ac0
   * CSS [2]: https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/
   
   
## Forms Intro to Model Driven (Reactive) Forms
  * https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
  * https://scotch.io/tutorials/angular-2-form-validation
  * BASIC: https://github.com/DeborahK/Angular-ReactiveForms/blob/master/Demo-Final/src/app/customers/customer.component.html
  * MAGIC: https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5

## Add Form Controls Dynamically
```
// some class.ts
public formQuiz: FormGroup;
answersOptions: any = [];


createForm() {
  this.formQuiz = new FormGroup({});
  this.questions.forEach(que => {
    const control: FormContorl = new FormControl('', Validators.required);
    this.formQuetionnaier.addControl(que.id, control);

    this.buildAnswerOptions(que.answers);
    this.prefill(que.id); // pre-fill
  });
}

// prefills only question
private prefill(queId: number) {
  if (this.responses) {
    this.formQuiz.get('' + queId).setValue(this.responses[queId]);
  }
}

private buildAnswerOptions(answers: any[]) {
  const temp = [];
  answers.forEach(answer => {
    temp.push(
      { value: answer.id, label: answer.label });
  });
  this.answersOptions.push(temp);
}


<form [formGroup]="formQuiz">
    <div *ngFor="let question of questions; let i = index;">
	    {{question.label}}
	    <div *ngFor="let answer of answersOptions[i]; let j = index;">
        <input type="radio" formControlName="{{answer.id}}" value="{{answer.label}}" /> {{answer.label}} 
	    </div>
    </div>
</form>
```


## Form Validations/Custom Validators
cross fields: https://medium.com/@realTomaszKula/angular-cross-field-validation-d94e0d063b61
basic: https://codecraft.tv/courses/angular/advanced-topics/basic-custom-validators/
```
<div *ngIf="subscriptionForm.get('UserName').errors.required">
            This field is required!
        </div>

this.formRegmyForm.get('myCheckbox').valueChanges
    .subscribe(value => {
      if(value) {
        this.myForm.get('anotherField').setValidators(Validators.required)
      } else {
        // do something
      }
    }
);

manually trigger error on a field: https://stackoverflow.com/questions/43553544/how-can-i-manually-set-an-angular-form-field-as-invalid
formData.form.controls['email'].setErrors({'incorrect': true});
formData.form.controls['email'].setErrors(null);

// validate-utils.ts
export const updateValidators = (control, validators) => {
  control.setValidators(validators);
  control.updateValueAndValidity({ onlySelf: true });
};

export const clearValidators = (controls: Array<FormControl | AbstractControl>) => {
  controls.forEach(control => updateValidators(control, null));
};

private markFormGroupTouched(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.controls[key];
      control.markAsDirty();
      if ((control instanceof FormGroup)) {
        this.markFormGroupTouched(control);
      }
});

export const validateForm = (form: FormGroup) => {
  Object.keys(form.controls).forEach(control => {
    const formControl = form.controls[control];

    if (formControl instanceof FormGroup) {
      validateForm(formControl);
    } else {
      formControl.markAsTouched();
    }
  });
};

// import { markFormGroupTouched, clearValidators, updateValidators } from '../shared/utilities/validate-utils.ts';
TEMPLATE:=> {{formQuiz.value | json}}
```

## PDF:
https://stackoverflow.com/questions/41484323/how-to-use-jspdf-with-angular-2

## Local/Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

*For production build:* `npm run dist`. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Reference

reactive form: https://github.com/hamzeen/angular2-reactive-form

validation errors out of the world: https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5

then filter now pipe!: https://stackoverflow.com/questions/52324514/why-wont-angulars-titlecase-filter-work-for-me

survival kit: https://hamzeen.wordpress.com/2018/03/04/angular-survival-kit/

deploy to github pages: https://github.com/cuckooinc/portfolio

css to scss [1]: https://scotch.io/tutorials/using-sass-with-the-angular-cli

[2]: https://stackoverflow.com/questions/41428437/angular-cli-generate-sass-project-from-existing-project

graph [1]: https://stackblitz.com/edit/angular-highcharts-stock?file=package.json

graph [2]: https://codesandbox.io/s/pkr2lol00

ValdiationReads:

  * https://medium.com/learn-angular/angular-5-forms-and-validations-343a585ecf50
  * https://medium.com/razroo/form-validation-65ac0f0d49a3
  

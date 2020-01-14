# NgLabs

This project is created with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.0; [Typescript](https://www.typescriptlang.org) version 2.3.4.

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
  });
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
        <input type="radio" formControlName="{{answer.id}}" /> {{answer.label}} 
	    </div>
    </div>
</form>
```


## Custom Validators
cross fields: https://medium.com/@realTomaszKula/angular-cross-field-validation-d94e0d063b61
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

then filter now pipe!: https://stackoverflow.com/questions/52324514/why-wont-angulars-titlecase-filter-work-for-me

survival kit: https://hamzeen.wordpress.com/2018/03/04/angular-survival-kit/

deploy to github pages: https://github.com/cuckooinc/portfolio

css to scss [1]: https://scotch.io/tutorials/using-sass-with-the-angular-cli

[2]: https://stackoverflow.com/questions/41428437/angular-cli-generate-sass-project-from-existing-project

graph [1]: https://stackblitz.com/edit/angular-highcharts-stock?file=package.json

graph [2]: https://codesandbox.io/s/pkr2lol00

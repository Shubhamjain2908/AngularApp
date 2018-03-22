import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') submitForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // in this approach you have to override the complete form data
    // this.submitForm.setValue({
    //   userData : {
    //     username : suggestedName,
    //     email : 'shubhamjain2908@gmail.com'
    //   },
    //   secret: '',
    //   questionAnswer: 'AAAAAAAOOOOOOOOOOOOOAAAAAAAAAAAOOOOOOOO',
    //   gender: 'male'
    // });
    this.submitForm.form.patchValue({
      userData: {username: suggestedName}
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.submitForm.value.userData.username;
    this.user.email = this.submitForm.value.userData.email;
    this.user.secretQuestion = this.submitForm.value.secret;
    this.user.answer = this.submitForm.value.questionAnswer;
    this.user.gender = this.submitForm.value.gender;

    this.submitForm.reset();
  }
}

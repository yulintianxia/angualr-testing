import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupName, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  get aliases() {
    console.log(this.profileForm.get('aliases'));
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  ngOnInit() {
    // this.changeAddress();
    this.updateProfile();
    console.log(this.profileForm.get('aliases'));
  }
  submit() {
    console.log(this.profileForm.value);
  }
  changeAddress() {
    /* 必须设置所有的值 */
    this.profileForm.setValue({
      firstName: '1',
      lastName: '2',
      address: {
        street: '3',
        city: '3',
        state: '3',
        zip: '3'
      }
    });
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'js',
      lastName: 'rao',
      address: {
        street: 'street'
      }
    });
  }
}

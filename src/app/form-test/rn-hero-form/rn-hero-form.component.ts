import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenValidators } from 'src/app/shared/directives/forbidden-name.directive';
import { identityRevealedValidator } from 'src/app/shared/directives/identity-revealed.directive';
import { UniqueAlterEgoValidator } from 'src/app/shared/directives/unique-alter-ego.directive';

@Component({
  selector: 'app-rn-hero-form',
  templateUrl: './rn-hero-form.component.html',
  styleUrls: ['./rn-hero-form.component.scss']
})
export class RnHeroFormComponent implements OnInit {
  heroForm: FormGroup;
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
  constructor(private alterEgoValidator: UniqueAlterEgoValidator) { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenValidators(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo, {
        asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn: 'blur'
      }),
      'power': new FormControl(this.hero.power, [Validators.required]),
    },   { validators: identityRevealedValidator });
  }

  get name() {
    return this.heroForm.get('name');
  }
  get alterEgo() {
    return this.heroForm.get('alterEgo');
  }

  get power() {
    return this.heroForm.get('power');
  }


}

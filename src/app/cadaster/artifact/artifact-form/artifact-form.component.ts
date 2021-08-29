import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-artifact-form',
  templateUrl: './artifact-form.component.html',
  styleUrls: ['./artifact-form.component.css'],
})
export class ArtifactFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: Form) {
    console.log(form);
  }
}

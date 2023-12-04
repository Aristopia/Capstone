import { Component } from '@angular/core';
import { Note } from '../note';
import { NgForm } from '@angular/forms';
import { Note_Service } from '../input/input.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {

  model = new Note("", "");

  constructor(private router: Router, private note_Service: Note_Service) {}
    addNote(form: NgForm){
      // const d = form.value.date.substring(0,9)
      const note: Note = {ntitle: form.value.ntitle, note: form.value.note};
      this.note_Service.storeNote(note)
      this.router.navigate(['note-list']);
    }
}

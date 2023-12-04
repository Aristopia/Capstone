import { Component } from '@angular/core';
import { Note } from '../note';
import { Note_Service } from '../input/input.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-inputs-list',
  templateUrl: './inputs-list.component.html',
  styleUrls: ['./inputs-list.component.css']
})
export class InputsListComponent {
  notes: Array<Note> = [];

  constructor(private note_Service: Note_Service) {}
    ngOnInit(){
      this.notes = this.note_Service.getNotes()
    }
}

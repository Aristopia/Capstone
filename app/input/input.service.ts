import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute} from '@angular/router';

import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Note } from '../note';

@Injectable({
    providedIn: 'root',
   })
  

export class Note_Service{
    storeNotes(notes : Note[]){
        localStorage.setItem("notes", JSON.stringify(notes))
    }

    storeNote(note: Note) {
        let notes: Note[] = this.getNotes()
        notes.push(note)
        localStorage.setItem("notes", JSON.stringify(notes))
    }

    getNotes(): Note[] {
        let notes: Note[]
        let notesString: string | null = localStorage.getItem("notes")
        if (notesString) {
            notes = JSON.parse(notesString)
        }
        else {
            notes = []
        }
        return notes
    }
}
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  constructor(private sanitizer: DomSanitizer) {}

  fileContent: string = '';
  editedContent: SafeHtml = '';
  submitted = false;
  a: string = '';
  b: SafeHtml = '';
  s: string[] = [];
  onSubmit(){ this.submitted = true; }

  lineNumber: any;
  line(csvForm: NgForm): void {
  
    // Get the line number from the form
    this.lineNumber = csvForm.value.lineNumber;
  
      // Set the variable 'a' to be displayed
      this.a = this.s[this.lineNumber];
    // this.a = lineNumber.toLocaleString();

    const words = this.a.split('","');
    const editedWords = words.map((word, index) => {
      // Define an array of colors
      const colors = ['red', 'darkblue', 'green', 'orange', 'purple', 'pink', 'lightblue']; 

      // Apply a color based on the word's position
      const color = colors[index % colors.length];



      switch(index)
      {
        case 0:
          word = "How close to the beginning of the search this was found: " + word + "\n";
        break;
        case 1:
          word = "Time into the search this was found: " + word + "\n";
        break;
        case 2:
          word = "Address of the device the signal came from: " + word + "\n";
        break;

        case 3:
          word = "Destination of the packet being transmitted: " + word + "\n";
        break;
        case 4:
          word = "Highest level protocal identified for this packet: " + word + "\n";
        break;
        case 5:
          word = "Number of bytes in the packet: " + word + "\n";
        break;
        case 6:
          word = "INFO: " + word + "\n";
        break;

      }
      // Wrap the word in a span with the chosen color
      return `<span style="color: ${color};">${word}</span>`;
    });

    // Join the edited words back into a single line
    this.a =  editedWords.join(' ');
    this.b = this.sanitizer.bypassSecurityTrustHtml(this.a);
    }

  
  
  
  newCSV(csvForm: NgForm){
    console.log(csvForm)
   var csv = new File([""], "CSV File");
  }
  //input file from the form
   getFiles(event: any) {
    const file = event.target.files[0];
    if (file)
    {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileContent = e.target.result as string;
        this.editedContent = this.editFileContent(this.fileContent);
    };
    reader.readAsText(file);
    }
  }
   private editFileContent(content: string) {
    // Split the content into lines
    const lines = content.split('\n');
    this.s = [];
    // const editedLines = lines.map((line) => {
      const editedLines = lines.map((line, index) => {
        // Check if we've reached the 1,000 line limit
        if (index >= 100) {
          return line; // Stop processing and return the original line
        }
        //creates an array, s, of the file string
        this.s.push(line);
    const words = line.split('","');
    const editedWords = words.map((word, index) => {
      // Define an array of colors
      const colors = ['red', 'darkblue', 'green', 'orange', 'purple', 'pink', 'lightblue']; // Add more colors as needed

      // Apply a color based on the word's position
      const color = colors[index % colors.length];

      // Wrap the word in a span with the chosen color
      return `<span style="color: ${color};">${word}</span>`;
    });

    // Join the edited words back into a single line
    return editedWords.join(' ');
  });

  // Join the edited lines back into a single string
  const editedContent =  editedLines.join('\n');
  return this.sanitizer.bypassSecurityTrustHtml(editedContent);
 }

 
  
}

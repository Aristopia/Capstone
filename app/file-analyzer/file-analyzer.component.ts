import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-analyzer',
  templateUrl: './file-analyzer.component.html',
  styleUrls: ['./file-analyzer.component.css']
})
export class FileAnalyzerComponent {


}

// Function to handle file selection
function onFileSelect(files: FileList | null) {
  if (files && files.length > 0) {
      const selectedFile = files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
          const fileContent = e.target?.result as string;
          displayFileContentLineByLine(fileContent);
      };

      reader.readAsText(selectedFile);
  } else {
      console.error('No file selected');
  }
}

// Function to display file content line by line
function displayFileContentLineByLine(content: string) {
  const fileContentElement = document.getElementById('fileContent');
  
  if (fileContentElement) {
      const lines = content.split('\n');
      lines.forEach(line => {
          const lineElement = document.createElement('div');
          lineElement.textContent = line;
          fileContentElement.appendChild(lineElement);
      });
  } else {
      console.error('File content element not found');
  }
}


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAnalyzerComponent } from './file-analyzer.component';

describe('FileAnalyzerComponent', () => {
  let component: FileAnalyzerComponent;
  let fixture: ComponentFixture<FileAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAnalyzerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

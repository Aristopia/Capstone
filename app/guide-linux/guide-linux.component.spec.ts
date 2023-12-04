import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideLinuxComponent } from './guide-linux.component';

describe('GuideLinuxComponent', () => {
  let component: GuideLinuxComponent;
  let fixture: ComponentFixture<GuideLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideLinuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

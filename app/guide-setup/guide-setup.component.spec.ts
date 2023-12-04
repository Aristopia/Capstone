import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSetupComponent } from './guide-setup.component';

describe('GuideSetupComponent', () => {
  let component: GuideSetupComponent;
  let fixture: ComponentFixture<GuideSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideWiresharkComponent } from './guide-wireshark.component';

describe('GuideWiresharkComponent', () => {
  let component: GuideWiresharkComponent;
  let fixture: ComponentFixture<GuideWiresharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideWiresharkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideWiresharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

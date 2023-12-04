import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideKismetComponent } from './guide-kismet.component';

describe('GuideKismetComponent', () => {
  let component: GuideKismetComponent;
  let fixture: ComponentFixture<GuideKismetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideKismetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideKismetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

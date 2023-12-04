import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootUsbComponent } from './boot-usb.component';

describe('BootUsbComponent', () => {
  let component: BootUsbComponent;
  let fixture: ComponentFixture<BootUsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootUsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootUsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

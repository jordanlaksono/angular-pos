import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganEditComponent } from './pelanggan-edit.component';

describe('PelangganEditComponent', () => {
  let component: PelangganEditComponent;
  let fixture: ComponentFixture<PelangganEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelangganEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

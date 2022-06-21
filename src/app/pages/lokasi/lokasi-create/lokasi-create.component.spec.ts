import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokasiCreateComponent } from './lokasi-create.component';

describe('LokasiCreateComponent', () => {
  let component: LokasiCreateComponent;
  let fixture: ComponentFixture<LokasiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokasiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokasiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

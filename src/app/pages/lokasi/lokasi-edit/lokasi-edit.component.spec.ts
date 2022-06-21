import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokasiEditComponent } from './lokasi-edit.component';

describe('LokasiEditComponent', () => {
  let component: LokasiEditComponent;
  let fixture: ComponentFixture<LokasiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokasiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokasiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

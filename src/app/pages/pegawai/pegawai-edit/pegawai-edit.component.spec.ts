import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiEditComponent } from './pegawai-edit.component';

describe('PegawaiEditComponent', () => {
  let component: PegawaiEditComponent;
  let fixture: ComponentFixture<PegawaiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiCreateComponent } from './pegawai-create.component';

describe('PegawaiCreateComponent', () => {
  let component: PegawaiCreateComponent;
  let fixture: ComponentFixture<PegawaiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiListComponent } from './pegawai-list.component';

describe('PegawaiListComponent', () => {
  let component: PegawaiListComponent;
  let fixture: ComponentFixture<PegawaiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

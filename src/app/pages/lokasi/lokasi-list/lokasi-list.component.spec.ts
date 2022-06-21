import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokasiListComponent } from './lokasi-list.component';

describe('LokasiListComponent', () => {
  let component: LokasiListComponent;
  let fixture: ComponentFixture<LokasiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokasiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

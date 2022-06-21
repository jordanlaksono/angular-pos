import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganListComponent } from './pelanggan-list.component';

describe('PelangganListComponent', () => {
  let component: PelangganListComponent;
  let fixture: ComponentFixture<PelangganListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelangganListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

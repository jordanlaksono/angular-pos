import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatuanListComponent } from './satuan-list.component';

describe('SatuanListComponent', () => {
  let component: SatuanListComponent;
  let fixture: ComponentFixture<SatuanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatuanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatuanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

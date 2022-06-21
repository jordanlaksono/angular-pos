import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelompokListComponent } from './kelompok-list.component';

describe('KelompokListComponent', () => {
  let component: KelompokListComponent;
  let fixture: ComponentFixture<KelompokListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelompokListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelompokListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

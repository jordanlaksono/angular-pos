import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelompokEditComponent } from './kelompok-edit.component';

describe('KelompokEditComponent', () => {
  let component: KelompokEditComponent;
  let fixture: ComponentFixture<KelompokEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelompokEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelompokEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

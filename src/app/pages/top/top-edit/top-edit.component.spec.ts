import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEditComponent } from './top-edit.component';

describe('TopEditComponent', () => {
  let component: TopEditComponent;
  let fixture: ComponentFixture<TopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

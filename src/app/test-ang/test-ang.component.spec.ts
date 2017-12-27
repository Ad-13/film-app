import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAngComponent } from './test-ang.component';

describe('TestAngComponent', () => {
  let component: TestAngComponent;
  let fixture: ComponentFixture<TestAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

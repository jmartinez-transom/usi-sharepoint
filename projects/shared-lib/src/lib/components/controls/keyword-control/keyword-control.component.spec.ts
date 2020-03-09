import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordControlComponent } from './keyword-control.component';

describe('KeywordControlComponent', () => {
  let component: KeywordControlComponent;
  let fixture: ComponentFixture<KeywordControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

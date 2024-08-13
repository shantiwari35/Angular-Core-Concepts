import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChildComponent } from './ng-child.component';

describe('NgChildComponent', () => {
  let component: NgChildComponent;
  let fixture: ComponentFixture<NgChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphjsComponent } from './graphjs.component';

describe('GraphjsComponent', () => {
  let component: GraphjsComponent;
  let fixture: ComponentFixture<GraphjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphjsComponent]
    });
    fixture = TestBed.createComponent(GraphjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

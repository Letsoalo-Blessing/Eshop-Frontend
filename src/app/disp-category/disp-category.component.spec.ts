import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispCategoryComponent } from './disp-category.component';

describe('DispCategoryComponent', () => {
  let component: DispCategoryComponent;
  let fixture: ComponentFixture<DispCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

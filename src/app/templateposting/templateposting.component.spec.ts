import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatepostingComponent } from './templateposting.component';

describe('TemplatepostingComponent', () => {
  let component: TemplatepostingComponent;
  let fixture: ComponentFixture<TemplatepostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatepostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatepostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

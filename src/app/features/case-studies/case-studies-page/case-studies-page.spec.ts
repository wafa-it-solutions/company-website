import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudiesPage } from './case-studies-page';

describe('CaseStudiesPage', () => {
  let component: CaseStudiesPage;
  let fixture: ComponentFixture<CaseStudiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudiesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudiesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

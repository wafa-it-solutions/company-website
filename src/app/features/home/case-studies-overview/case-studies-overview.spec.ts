import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudiesOverview } from './case-studies-overview';

describe('CaseStudiesOverview', () => {
  let component: CaseStudiesOverview;
  let fixture: ComponentFixture<CaseStudiesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudiesOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudiesOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

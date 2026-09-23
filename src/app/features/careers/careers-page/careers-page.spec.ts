import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareersPage } from './careers-page';

describe('CareersPage', () => {
  let component: CareersPage;
  let fixture: ComponentFixture<CareersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

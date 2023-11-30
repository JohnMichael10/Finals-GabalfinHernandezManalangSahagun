import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleApiPage } from './sample-api.page';

describe('SampleApiPage', () => {
  let component: SampleApiPage;
  let fixture: ComponentFixture<SampleApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SampleApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

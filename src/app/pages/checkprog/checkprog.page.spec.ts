import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckprogPage } from './checkprog.page';

describe('CheckprogPage', () => {
  let component: CheckprogPage;
  let fixture: ComponentFixture<CheckprogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckprogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

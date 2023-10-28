import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmigoPage } from './amigo.page';

describe('AmigoPage', () => {
  let component: AmigoPage;
  let fixture: ComponentFixture<AmigoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

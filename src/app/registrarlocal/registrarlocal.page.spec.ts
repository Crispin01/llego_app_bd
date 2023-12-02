import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarlocalPage } from './registrarlocal.page';

describe('RegistrarlocalPage', () => {
  let component: RegistrarlocalPage;
  let fixture: ComponentFixture<RegistrarlocalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarlocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

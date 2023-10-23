import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPage } from './dashboard.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from 'src/app/service/api-call/api-call.service';
import { Observable, of } from 'rxjs';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPage],
      imports: [HttpClientModule], // Import HttpClientModule here
      providers: [ApiCallService],  // Provide ApiCallService here
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch data successfully',(done) => {
    let apiCallService = fixture.debugElement.injector.get(ApiCallService);
    const testdata = [
      {body:"hello",id: 1,title: "Good Morning"},
      {body:"Hi",id: 2,title: "Good Evening"}]
   let spy = spyOn(apiCallService,'getData').and.returnValue(of(testdata));
   component.getData();
   expect(spy).toHaveBeenCalled();
   apiCallService.getData().subscribe((result)=>{
    expect(result).toEqual(testdata);
    done();
   })
  })
 
});

import { Component, OnInit, ViewChild } from '@angular/core';
import { ConstantsService } from 'src/app/service/constants/constants.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  selectedTab: string = 'mPIN';
  customerId: string = '';
  password: string = '';
  mPIN: string[] = ['', '', '', '', '', ''];
  selectedMPIN: number = 0;

  public t1: any;
  public t2: any;
  public t3: any;
  public t4: any;
  public t5: any;
  public t6: any;

  @ViewChild('key1', { static: false }) otp1;
  @ViewChild('key5', { static: false }) otp5;
  @ViewChild('key6', { static: false }) otp6;
 

  
  // onMPINInput(index: number) {
  //   if (this.mPIN[index] && /^[0-9]$/.test(this.mPIN[index])) {
  //     this.selectedMPIN = index < 5 ? index + 1 : 5;
  //     if (index < 5) {
  //       this.focusNextInput(index + 1);
  //     }
  //   }
  // }

  // focusNextInput(index: number) {
  //   if (index >= 0 && index < 6) {
  //     const inputElement = document.getElementById(`mpin-input-${index}`);
  //     if (inputElement) {
  //       inputElement.focus();
  //     }
  //   }
  // }

  checkEvent() {
    var t = this.t1 + "";
    var temp = t.split('');
  
    if (temp.length == 6) {
      this.t1 = parseInt(temp[0])
      this.t2 = parseInt(temp[1])
      this.t3 = parseInt(temp[2])
      this.t4 = parseInt(temp[3])
      this.t5 = parseInt(temp[4])
      this.t6 = parseInt(temp[5])
      this.otp6.setFocus();
    }

    if ((this.t1 + "" + this.t2 + this.t3 + this.t4 + this.t5 + this.t6).length == 6) {
     
      return true;
    }
    else {
     
      return false;
    }
  }


  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  login() {
    // Implement your login logic here
  }

  register(){
    // Implement your register logic here
  }

  // onMPINInput(event: any) {
  //   const input = event.target;
  //   if (this.currentInputIndex < 6) {
  //     this.mPIN = this.mPIN.substr(0, this.currentInputIndex) + event.data + this.mPIN.substr(this.currentInputIndex);
  //     this.currentInputIndex++;
  //     if (this.currentInputIndex < 6) {
  //       this.mpinInputElements[this.currentInputIndex].focus();
  //     }
  //   }
  // }
  OTP: string[] = ['', '', '', '', '', ''];

  otpController(event, next, prev, index?) {
    if (index == 6) {
        console.log("submit");
        return; // This is a valid return statement
    }

    if (event.target.value.length < 1 && prev) {
        prev.setFocus();
        return; // This is a valid return statement
    } else if (next && event.target.value.length > 0) {
        next.setFocus();
        return; // This is a valid return statement
    }

    // If none of the conditions are met, you can choose to return or not.
    // If you don't want to return anything, you can omit the return statement.
    // If you want to return something for all cases, you can add a default return statement.
}

}



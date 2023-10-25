import { Component, OnInit } from '@angular/core';

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


  onMPINInput(index: number) {
    if (this.mPIN[index] && /^[0-9]$/.test(this.mPIN[index])) {
      this.selectedMPIN = index < 5 ? index + 1 : 5;
      if (index < 5) {
        this.focusNextInput(index + 1);
      }
    }
  }

  focusNextInput(index: number) {
    if (index >= 0 && index < 6) {
      const inputElement = document.getElementById(`mpin-input-${index}`);
      if (inputElement) {
        inputElement.focus();
      }
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



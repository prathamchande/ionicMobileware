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


  blocks: { imageUrl: string; text: string }[] = [
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'Contact us'
    },
    {
      imageUrl: '../../../assets/images/thumb.png',
      text: 'Apply for Loan'
    },
    {
      imageUrl: '../../../assets/images/userlogo.png',
      text: 'Quick view balance'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'Digital Account Opening'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'UPI'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'More...'
    }
  ];

  
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

}



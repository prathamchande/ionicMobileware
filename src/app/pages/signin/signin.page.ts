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

  mPIN: string[] = ['', '', '', '', '', '']; // Initialize an array to store individual digits
  selectedMPIN: number = 0; // Track the selected digit



  selectMPIN(index: number) {
    this.selectedMPIN = index;
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

}



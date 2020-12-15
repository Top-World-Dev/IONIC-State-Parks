import { AppService } from './../../providers/app.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register-name',
  templateUrl: 'register-name.html',
})
export class RegisterNamePage {

  firstname = "";
  lastname = "";
  email = "";
  showbutton1=true;
  showbutton2=false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private appService: AppService) {
  }

  back() {
    this.navCtrl.pop({
      animation: 'ios-transition'
    });
  }

  next(){
    
    if(this.firstname && this.firstname.length >= 3){
      // this.navCtrl.push("RegisterPinPage", { name: this.firstname}, {
      //   animation: 'ios-transition'
      // });
    }
    else
    {
      this.appService.showAlert("Validation Errors", "First Name is required and should be at least 3 characters long", "Ok", () => {});
      return;
    }
    if(this.lastname && this.lastname.length >= 3){
      // this.navCtrl.push("RegisterPinPage", { name: this.firstname}, {
      //   animation: 'ios-transition'
      // });
    }
    else
    {
      this.appService.showAlert("Validation Errors", "Last Name is required and should be at least 3 characters long", "Ok", () => {});
      return;
    }
      if(this.email && this.email.length >= 3){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.email.toLowerCase())) {
          this.appService.showAlert(
            "Validation Errors",
            "Email not valid",
            "Ok",
            () => {}
          );
        }
        
      }
      else
      {
        this.appService.showAlert("Validation Errors", "Email is required and should be correct Email address", "Ok", () => {});
        return;
      }


      this.saveaccountdata();
    }

    saveaccountdata() {
      localStorage.setItem('firstname', this.firstname);
      localStorage.setItem('lastname', this.lastname);
      localStorage.setItem('email', this.email);
      this.showbutton1=false;
      this.showbutton2=true;
    }

    gotohomepage() {
      this.navCtrl.setRoot("TabsPage", {}, {
        animate: true,
        direction: "forward",
        animation: 'ios-transition',
        // duration: 10000
      });
    }
    
    
}



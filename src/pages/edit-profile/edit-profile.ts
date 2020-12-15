import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Shopbook } from "../../providers/shopbook";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {


  uploadImage = false;
  account = {
    Name: "",
    // FirstName: "",
    // LastName: "",
    // ProfileImageUrl: "assets/img/login.png"
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private imagePicker: ImagePicker,
    private shopbook: Shopbook) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EditProfilePage');
  }

  ionViewWillEnter(){
    this.account = this.navParams.get('account');
  }

  pickImage() {
    var options = {
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: 1
    };
    this.imagePicker.getPictures(options).then((result) => {
      this.uploadImage = true;
      // this.userInfo.ProfileImageUrl = result;
    }, (err) => { });
  }

  save(){
    // if(this.uploadImage){
    //   this.shopbook.uploadProfile(this.userInfo.ProfileImageUrl[0], (res) => {
    //     this.userInfo.ProfileImageUrl = res.Url;
    //     this.updateProfile();
    //   });
    // } else {
      this.updateProfile();
    // }
  }

  updateProfile(){
    
  }

  changePassword(){
    this.navCtrl.push("ChangePasswordPage");
  }


}

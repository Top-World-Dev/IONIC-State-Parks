import { Injectable } from "@angular/core";
import { LoadingController, AlertController } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";

@Injectable()
export class AppService {
  constructor(
    private loadingCtrl: LoadingController,
    private emailComposer: EmailComposer,
    private alertCtrl: AlertController
  ) {}

  defaultErrorHandler(msg: string, title: string = "error") {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: [
        "OK",
        {
          text: "TennesseeParks App",
          handler: () => {
            let email = {
              to: "contactus@TParks.com",
              subject: "Contactus Email",
              body: "",
              isHtml: true
            };

            this.emailComposer.open(email);
          }
        }
      ]
    });
    alert.present();
  }

  showLoading(duration = 205000) {
    let dialog = this.loadingCtrl.create({
      content: "Please wait ..",
      duration: duration
    });
    dialog.present();
    return dialog;
  }

  hideLoading(dialog) {
    if (dialog != null) {
      dialog.dismiss();
    }
  }

  showAlert(
    title: string,
    msg: string,
    buttonText = "OK",
    buttonHandler: (data) => any,
    backDismiss = true
  ) {
    let prompt = this.alertCtrl.create({
      title: title,
      message: msg,
      enableBackdropDismiss: backDismiss,
      buttons: [
        {
          text: buttonText,
          handler: buttonHandler
        }
      ]
    });
    prompt.present();
  }
}

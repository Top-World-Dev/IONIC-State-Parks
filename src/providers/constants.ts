import {Injectable} from '@angular/core';

@Injectable()
export class Constants {
    /**
     * used with login because it doesn't have /api/ in the url
     */

     public supportEmail = "zakria@bloomsoft.net";

    
    // NEED THE PRODUCTION URL FOR 3RD PARTY AUTH
    public ProductionUrl = ""; //live API url
    //public ProductionUrl = ""; //live API url
    public LocalDevUrl = "http://localhost:55000/";
    //public appUrl = this.ProductionUrl;
    public appUrl = this.LocalDevUrl;
    // public appUrl = "/api/" ;//dev url

     public apiUrl = this.appUrl + "api/";
    //public apiUrl = this.ProductionUrl + "api/";




}

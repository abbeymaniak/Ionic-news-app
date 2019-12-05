import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";
import { tap } from "rxjs/operators";

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set("apiKey", apiKey);

@Injectable({
  providedIn: "root"
})
export class NewsService {
  loading;
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController
  ) {}

  async showLoading() {
    this.loaderToshow = this.loadingController
      .create({
        message: "loading..."
      })
      .then(res => {
        res.present();
        res.onDidDismiss().then(dis => {
          console.log("loading dismissed");
        });
      });

    setTimeout(() => {
      this.loadingController.dismiss();
    }, 3000);
  }

  getData(url) {
    this.showLoading();
    return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
      tap(value => {
        // this.loading.onDismiss();
        console.log(value);
      })
    );
  }
}

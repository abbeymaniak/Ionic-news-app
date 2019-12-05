import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news.service";

@Component({
  selector: "app-top-news",
  templateUrl: "./top-news.page.html",
  styleUrls: ["./top-news.page.scss"]
})
export class TopNewsPage implements OnInit {
  news: any;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getData();

    // this.newsService.getData("top-headlines?country=ng&").subscribe(data => {
    //   this.news = data;
    //   console.log(data);
    // });
  }

  getData() {
    this.news = this.newsService.getData("top-headlines?country=ng");
  }

  onRefresh(event) {
    this.getData();
    console.log(event);

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}

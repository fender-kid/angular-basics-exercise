import { Component } from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})

export class ArticleComponent {
  title: string = "My Default Title"
  content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  isTechRelated: boolean = true

  toggleIsTechRelated() {
    this.isTechRelated = !this.isTechRelated;
  }
}


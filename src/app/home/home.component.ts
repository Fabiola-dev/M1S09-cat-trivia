import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  CatFactsService,
  Fact,
} from "src/app/shared/services/cat-facts.service";

let facts: Array<Fact>;

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  showGif = false;
  text = "";

  constructor(private catFactsService: CatFactsService) {}

  ngOnInit() {
    this.catFactsService.getFacts().subscribe((data: Array<Fact>) => {
      facts = data;
      const i = Math.floor(Math.random() * facts.length);
      this.text = data[i].text;
    });
    this.clickImage();
  }

  clickImage() {
    this.showGif = false;
  }

  clickGif() {
    this.showGif = true;
  }

/*   getFacts() {
      const url='https://cat-fact.herokuapp.com/facts'
      //const url = 'https://api.adviceslip.com/advice';
      this.http.get<{ catFacts: { _id: number, text: string }}>(url).subscribe(retorno => {
        this.catFacts = retorno.catFacts;
      });
  }
 */

}

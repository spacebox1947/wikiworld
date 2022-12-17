import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-display-wiki',
  templateUrl: './display-wiki.component.html',
  styleUrls: ['./display-wiki.component.css']
})
export class DisplayWikiComponent implements OnInit {
  wikiText: string = '';
  wikiTitle: string = '';
  wikiPageId: number = 0;
  wikiUrlForPageid = "https://en.wikipedia.org/?curid=";
  displayAPage = true;

  constructor(public wikipedia: WikipediaService) { }

  ngOnInit(): void {
    this.wikipedia.getPageFromWikipedia().subscribe(({title, pageid, text}) => {
      this.wikiText = text;
      this.wikiTitle = title;
      this.wikiPageId = pageid;
    });
  }

  ngOnChanges() {
    this.wikipedia.getPageFromWikipedia().subscribe(({title, pageid, text}) => {
      this.wikiText = text;
      this.wikiTitle = title;
      this.wikiPageId = pageid;
    });
  }

  togglePageView() {
    this.displayAPage = !this.displayAPage;
    //this.ngOnInit();
  }

}

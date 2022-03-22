import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lang!: string;
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  changeLang(lang: string) {
    console.log('lang', lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}

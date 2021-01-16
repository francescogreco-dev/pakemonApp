import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FavoritePage } from '../favorite/favorite';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritePage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;
  constructor() {

  }
}

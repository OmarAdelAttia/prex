import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent {

  imgs = {
    1: 'https://egyptianstreets.com/wp-content/uploads/2021/08/al-kotob-khan.jpeg',
    2: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkenya-aircargo.com%2F2018%2F03%2F20%2Ftips-for-buying-electronics-online%2F&psig=AOvVaw1g-xeEGHC-RdgvDKRFsXD6&ust=1699189806281000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjYmbe1qoIDFQAAAAAdAAAAABAI',
    3: ''
  }

  tiles: Tile[] = [
    { text: 'https://egyptianstreets.com/wp-content/uploads/2021/08/al-kotob-khan.jpeg', cols: 3, rows: 1, color: 'transparent' },
    { text: 'https://kenya-aircargo.com/wp-content/uploads/2018/03/iStock_000020875510Medium.jpg', cols: 1, rows: 2, color: 'transparent' },
    { text: 'https://itourvn.com/wp-content/uploads/2020/03/electronics-in-saigon-972-696x412.jpg', cols: 1, rows: 1, color: 'transparent' },
    { text: 'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_Header_APP_Electronics_NTA_750x275_EN_ca375fcd-4e04-4600-89a8-d5ceff1b8f9e.jpg', cols: 2, rows: 1, color: 'transparent' },
    { text: 'https://egyptianstreets.com/wp-content/uploads/2021/08/al-kotob-khan.jpeg', cols: 2, rows: 1, color: 'transparent' },
    { text: 'https://m.media-amazon.com/images/I/41d8ZV-410L._AC_UF894,1000_QL80_.jpg', cols: 1, rows: 2, color: 'transparent' },
    { text: 'https://cdnprod.mafretailproxy.com/sys-master-root/h33/hd8/14913515094046/558854_main.jpg_480Wx480H', cols: 1, rows: 2, color: 'transparent' },
    { text: 'https://www.cleverthai.com/wp-content/uploads/2023/03/5-Best-Places-To-Buy-Electronics-In-Bangkok.jpg', cols: 1, rows: 1, color: 'transparent' },
    { text: 'https://media.product.which.co.uk/prod/images/ar_2to1_1500x750/7ed08dabb9f0-tech-store.jpg', cols: 1, rows: 1, color: 'transparent' },
  ];

}

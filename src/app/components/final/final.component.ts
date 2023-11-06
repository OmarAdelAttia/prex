import { Component } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent {

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Fall'];
  winter: string = 'https://seasonsyear.com/sites/default/files/images/seasons/winter-13.jpg';
  spring: string = 'https://cdn.shopify.com/s/files/1/0778/2679/files/spring_trees.jpg?v=1616252131';
  summer: string = 'https://wallpapers.com/images/featured/summer-pictures-nyv022soo0r5p1sq.jpg';
  fall: string = 'https://media.cnn.com/api/v1/images/stellar/prod/210316134817-03-wisdom-project-autumn.jpg?q=w_4000,h_2250,x_0,y_0,c_fill';
  imgSeason: string = '';
  season: string = '';

  showSeason(season: any) {
    this.season = season;
    switch (season) {
      case 'Winter':
        this.imgSeason = this.winter;
        break;

      case 'Spring':
        this.imgSeason = this.spring;
        break;

      case 'Summer':
        this.imgSeason = this.summer;
        break;

      case 'Fall':
        this.imgSeason = this.fall;
        break;

      case '':
        this.imgSeason = '';
        break;

      default:
        break;
    }
  }

}

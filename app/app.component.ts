import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';




@Component({
    selector: 'my-app',
    selectedHero: Hero,
    template: `<h2>My Heroes</h2>
               <h3 *ngIf="selectedHero">Selected: {{selectedHero.name}}</h3>
              <ul class="heroes">
              <li (click)="onSelect(hero)" *ngFor="let hero of heroes" [class.selected]="hero === selectedHero">{{hero.name}} : {{hero.id}}</li>
              <my-hero-detail [hero]="selectedHero"></my-hero-detail>
</ul>`,
  styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = "Tour of heroes";
  heroes: Hero[];
  selectedHero : Hero;
  onSelect(hero:Hero) { this.selectedHero = hero;}

  constructor(private _heroService: HeroService){}

  getHeroes(){
    this.heroes = this._heroService.getHeroes();
  }

  ngOnInit() {
    return this.getHeroes();
  }
}

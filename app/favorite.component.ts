import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
    	.glyphicon {
    		font-size:50; 
    		top:30px; 
    		left:30px
    	}
		.glyphicon-star {
			color: orange;
		}
    `]
//   	inputs: ['isFavorite'],
//   	outputs: ['change']
})
export class FavoriteComponent { 
	@Input() isFavorite = false;

	@Output() change = new EventEmitter();

	onStarClick() {
		this.isFavorite = !this.isFavorite;
		this.change.emit({ newValue: this.isFavorite });
	}
}

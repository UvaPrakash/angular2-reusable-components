import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
		<i 
			class="glyphicon glyphicon-heart" 
			[class.highlighted]="isLiked"
			(click)="onLikeClick()">
		</i>
		<span>{{ totalLikes }}</span>
    `,
    styles: [`
    	.glyphicon {
    		font-size:50; 
    		top:100px; 
    		left:-28px;
    	}
		.glyphicon-heart {
			color: #ccc;
		}
		.highlighted {
			color: #009688;
		}
		i {
			cursor: pointer;
		}
		span {
			font-size: 35px;
			position: absolute;
			top: 100px;
		}
    `]
//   	inputs: ['isFavorite'],
//   	outputs: ['change']
})
export class LikeComponent { 
	@Input() totalLikes = 0;
	@Input() isLiked = true;

	onLikeClick() {
		this.isLiked = !this.isLiked;
		this.totalLikes += this.isLiked ? 1 : -1;
	}
}

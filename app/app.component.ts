import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
		<favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
		<like [totalLikes]="tweet.totalLikes" [isLiked]="tweet.isLiked"></like>
    `,
    directives: [FavoriteComponent, LikeComponent]
})
export class AppComponent { 
	post = {
		title: "Title",
		isFavorite: true
	}

	tweet = {
		totalLikes: 10,
		isLiked: false
	}

	onFavoriteChange($event) {
		console.log($event);
	}
}

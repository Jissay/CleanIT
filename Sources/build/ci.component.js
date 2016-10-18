"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var game_service_1 = require('./services/game.service');
/** SAMPLE DATA **/
var NAME = 'Jissay';
/** APP COMPONENT TEMPLATE **/
var AppComponent = (function () {
    function AppComponent(gameService) {
        this.gameService = gameService;
        /** DATA **/
        this.appName = 'Clean IT';
        this.user = {
            id: 1,
            name: NAME,
            games: new Array()
        };
    }
    /** METHODS **/
    AppComponent.prototype.onSelect = function (game) {
        this.selectedGame = game;
    };
    AppComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getGames().then(function (games) { return _this.user.games = games; });
    };
    /** ONINIT IMPLEMENTATION **/
    AppComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ci-app',
            template: "\n    <h1>Hello {{user.name}}, welcome to {{appName}}</h1>\n\n    <h2>My Games</h2>\n    <ul class=\"games\">\n      <li *ngFor=\"let game of user.games\" [class.selected]=\"game == selectedGame\" (click)=\"onSelect(game)\">\n        <span class=\"item\">{{game.id}}</span> {{game.name}}\n      </li>\n    </ul>\n\n    <ci-game-detail [game]=\"selectedGame\"></ci-game-detail>\n\n    <h2>My details!</h2>\n    <div> \n      <label>Your id is :</label> {{user.id}} \n    </div>\n    \n    <div>\n      <label>Your name is :</label>\n      <input [(ngModel)]=\"user.name\" placeholder=\"name\">\n    </div>\n  ",
            providers: [game_service_1.GameService]
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=ci.component.js.map
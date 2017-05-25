"use strict";
var core_1 = require("@angular/core");
var faker = require("faker");
var _ = require("lodash");
var fileSystemModule = require("file-system");
var constModule = require("../shared/constants");
var static_data_1 = require("../shared/static-data");
var MockDataService = (function () {
    function MockDataService() {
    }
    MockDataService.prototype.getUserAvatars = function (path) {
        var avatarList = [];
        var currentAppFolder = fileSystemModule.knownFolders.currentApp();
        var menAvatarsFile = currentAppFolder.getFile(path);
        var fileText = menAvatarsFile.readTextSync();
        var lines = fileText.split('\n');
        for (var i = 0; i < lines.length; i++) {
            avatarList.push(lines[i]);
        }
        return avatarList;
    };
    MockDataService.prototype.generateUser = function (avatarsMen) {
        var genderBool = faker.random.boolean();
        var genderInt = parseInt(genderBool + '');
        var firstName = faker.name.firstName(genderInt);
        var lastName = faker.name.lastName(genderInt);
        var avatar = _.sample(avatarsMen);
        var user = {
            id: faker.random.uuid(),
            fullName: firstName + ' ' + lastName,
            avatar: avatar
        };
        return user;
    };
    MockDataService.prototype.getMeUser = function () {
        var avatarMe = this.getUserAvatars('images/avatars/base64/me.txt')[0];
        var userMe = {
            id: faker.random.uuid(),
            fullName: 'Alex Ziskind',
            avatar: avatarMe
        };
        return userMe;
    };
    MockDataService.prototype.generateUsers = function () {
        var _this = this;
        var avatarsLi = this.getUserAvatars('images/avatars/base64/base64.txt');
        var users = _.times(constModule.NUM_USERS, function () {
            return _this.generateUser(avatarsLi);
        });
        var userMe = this.getMeUser();
        users.unshift(userMe);
        return users;
    };
    MockDataService.prototype.generatePTItem = function (users) {
        var typeStr = static_data_1.ItemTypeEnum[_.random(1, 4)];
        var priorityStr = static_data_1.PriorityEnum[_.random(1, 4)];
        var statusStr = static_data_1.StatusEnum[_.random(1, 4)];
        var ptItem = {
            id: faker.random.uuid(),
            title: this.toTitleCase(faker.lorem.words()),
            dateCreated: faker.date.past(1),
            dateModified: faker.date.past(1),
            type: static_data_1.ItemTypeEnum[typeStr],
            estimate: _.random(1, 24),
            priority: static_data_1.PriorityEnum[priorityStr],
            status: static_data_1.StatusEnum[statusStr],
            assignee: _.sample(users),
            tasks: this.generateTasks(),
            comments: this.generateComments(users)
        };
        return ptItem;
    };
    MockDataService.prototype.generateTasks = function () {
        var _this = this;
        var numTasks = _.random(5, 20);
        var tasks = _.times(numTasks, function () {
            return _this.generateTask();
        });
        return tasks;
    };
    MockDataService.prototype.generateTask = function () {
        var task = {
            id: faker.random.uuid(),
            title: this.toTitleCase(faker.lorem.words()),
            dateCreated: faker.date.past(1),
            dateModified: faker.date.past(1),
            completed: faker.random.boolean()
        };
        return task;
    };
    MockDataService.prototype.generateComments = function (users) {
        var _this = this;
        var numComments = _.random(0, 5);
        var comments = _.times(numComments, function () {
            return _this.generateComment(users);
        });
        return comments;
    };
    MockDataService.prototype.generateComment = function (users) {
        var comment = {
            id: faker.random.uuid(),
            title: this.toTitleCase(faker.lorem.sentence(20, 40)),
            dateCreated: faker.date.past(1),
            dateModified: faker.date.past(1),
            user: _.sample(users)
        };
        return comment;
    };
    MockDataService.prototype.generatePTItems = function (users) {
        var _this = this;
        var items = _.times(constModule.NUM_PT_ITEMS, function () {
            return _this.generatePTItem(users);
        });
        return items;
    };
    MockDataService.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    return MockDataService;
}());
MockDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MockDataService);
exports.MockDataService = MockDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2NrLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBRTNDLDZCQUErQjtBQUMvQiwwQkFBNEI7QUFFNUIsOENBQWdEO0FBRWhELGlEQUFtRDtBQUNuRCxxREFBK0U7QUFTL0UsSUFBYSxlQUFlO0lBR3hCO0lBQWdCLENBQUM7SUFFVCx3Q0FBYyxHQUF0QixVQUF1QixJQUFJO1FBQ3ZCLElBQUksVUFBVSxHQUFrQixFQUFFLENBQUM7UUFDbkMsSUFBSSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEUsSUFBSSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksUUFBUSxHQUFHLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU3QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVNLHNDQUFZLEdBQW5CLFVBQW9CLFVBQW9CO1FBQ3BDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxT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ICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXInO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgKiBhcyBmaWxlU3lzdGVtTW9kdWxlIGZyb20gJ2ZpbGUtc3lzdGVtJztcblxuaW1wb3J0ICogYXMgY29uc3RNb2R1bGUgZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBJdGVtVHlwZUVudW0sIFByaW9yaXR5RW51bSwgU3RhdHVzRW51bSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5cbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElVc2VyID0gUFREb21haW4uSVVzZXI7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5pbXBvcnQgSVRhc2sgPSBQVERvbWFpbi5JVGFzaztcbmltcG9ydCBJQ29tbWVudCA9IFBURG9tYWluLklDb21tZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0RhdGFTZXJ2aWNlIHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHByaXZhdGUgZ2V0VXNlckF2YXRhcnMocGF0aCkge1xuICAgICAgICB2YXIgYXZhdGFyTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudEFwcEZvbGRlciA9IGZpbGVTeXN0ZW1Nb2R1bGUua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICAgICAgdmFyIG1lbkF2YXRhcnNGaWxlID0gY3VycmVudEFwcEZvbGRlci5nZXRGaWxlKHBhdGgpO1xuICAgICAgICB2YXIgZmlsZVRleHQgPSBtZW5BdmF0YXJzRmlsZS5yZWFkVGV4dFN5bmMoKTtcblxuICAgICAgICB2YXIgbGluZXMgPSBmaWxlVGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF2YXRhckxpc3QucHVzaChsaW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF2YXRhckxpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlVXNlcihhdmF0YXJzTWVuOiBzdHJpbmdbXSk6IElVc2VyIHtcbiAgICAgICAgbGV0IGdlbmRlckJvb2wgPSBmYWtlci5yYW5kb20uYm9vbGVhbigpO1xuICAgICAgICBsZXQgZ2VuZGVySW50ID0gcGFyc2VJbnQoZ2VuZGVyQm9vbCArICcnKTtcbiAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKGdlbmRlckludCk7XG4gICAgICAgIGxldCBsYXN0TmFtZSA9IGZha2VyLm5hbWUubGFzdE5hbWUoZ2VuZGVySW50KTtcbiAgICAgICAgdmFyIGF2YXRhciA9IF8uc2FtcGxlKGF2YXRhcnNNZW4pO1xuXG4gICAgICAgIGxldCB1c2VyOiBJVXNlciA9IHtcbiAgICAgICAgICAgIGlkOiBmYWtlci5yYW5kb20udXVpZCgpLFxuICAgICAgICAgICAgZnVsbE5hbWU6IGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lLFxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1lVXNlcigpOiBJVXNlciB7XG4gICAgICAgIGxldCBhdmF0YXJNZSA9IHRoaXMuZ2V0VXNlckF2YXRhcnMoJ2ltYWdlcy9hdmF0YXJzL2Jhc2U2NC9tZS50eHQnKVswXTtcbiAgICAgICAgbGV0IHVzZXJNZTogSVVzZXIgPSB7XG4gICAgICAgICAgICBpZDogZmFrZXIucmFuZG9tLnV1aWQoKSxcbiAgICAgICAgICAgIGZ1bGxOYW1lOiAnQWxleCBaaXNraW5kJyxcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyTWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZXJNZTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZW5lcmF0ZVVzZXJzKCk6IEFycmF5PElVc2VyPiB7XG4gICAgICAgIGxldCBhdmF0YXJzTGkgPSB0aGlzLmdldFVzZXJBdmF0YXJzKCdpbWFnZXMvYXZhdGFycy9iYXNlNjQvYmFzZTY0LnR4dCcpO1xuICAgICAgICBsZXQgdXNlcnMgPSBfLnRpbWVzKGNvbnN0TW9kdWxlLk5VTV9VU0VSUywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVc2VyKGF2YXRhcnNMaSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdXNlck1lID0gdGhpcy5nZXRNZVVzZXIoKTtcbiAgICAgICAgdXNlcnMudW5zaGlmdCh1c2VyTWUpO1xuICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlUFRJdGVtKHVzZXJzOiBBcnJheTxJVXNlcj4pOiBJUFRJdGVtIHtcbiAgICAgICAgbGV0IHR5cGVTdHIgPSBJdGVtVHlwZUVudW1bXy5yYW5kb20oMSwgNCldO1xuICAgICAgICBsZXQgcHJpb3JpdHlTdHIgPSBQcmlvcml0eUVudW1bXy5yYW5kb20oMSwgNCldO1xuICAgICAgICBsZXQgc3RhdHVzU3RyID0gU3RhdHVzRW51bVtfLnJhbmRvbSgxLCA0KV07XG5cbiAgICAgICAgbGV0IHB0SXRlbTogSVBUSXRlbSA9IHtcbiAgICAgICAgICAgIGlkOiBmYWtlci5yYW5kb20udXVpZCgpLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudG9UaXRsZUNhc2UoZmFrZXIubG9yZW0ud29yZHMoKSksXG4gICAgICAgICAgICBkYXRlQ3JlYXRlZDogZmFrZXIuZGF0ZS5wYXN0KDEpLFxuICAgICAgICAgICAgZGF0ZU1vZGlmaWVkOiBmYWtlci5kYXRlLnBhc3QoMSksXG4gICAgICAgICAgICB0eXBlOiBJdGVtVHlwZUVudW1bdHlwZVN0cl0sXG4gICAgICAgICAgICBlc3RpbWF0ZTogXy5yYW5kb20oMSwgMjQpLFxuICAgICAgICAgICAgcHJpb3JpdHk6IFByaW9yaXR5RW51bVtwcmlvcml0eVN0cl0sXG4gICAgICAgICAgICBzdGF0dXM6IFN0YXR1c0VudW1bc3RhdHVzU3RyXSxcbiAgICAgICAgICAgIGFzc2lnbmVlOiBfLnNhbXBsZSh1c2VycyksXG4gICAgICAgICAgICB0YXNrczogdGhpcy5nZW5lcmF0ZVRhc2tzKCksXG4gICAgICAgICAgICBjb21tZW50czogdGhpcy5nZW5lcmF0ZUNvbW1lbnRzKHVzZXJzKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBwdEl0ZW07XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlVGFza3MoKTogQXJyYXk8SVRhc2s+IHtcbiAgICAgICAgbGV0IG51bVRhc2tzID0gXy5yYW5kb20oNSwgMjApO1xuICAgICAgICBsZXQgdGFza3MgPSBfLnRpbWVzKG51bVRhc2tzLCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVRhc2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVUYXNrKCk6IElUYXNrIHtcbiAgICAgICAgbGV0IHRhc2s6IElUYXNrID0ge1xuICAgICAgICAgICAgaWQ6IGZha2VyLnJhbmRvbS51dWlkKCksXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50b1RpdGxlQ2FzZShmYWtlci5sb3JlbS53b3JkcygpKSxcbiAgICAgICAgICAgIGRhdGVDcmVhdGVkOiBmYWtlci5kYXRlLnBhc3QoMSksXG4gICAgICAgICAgICBkYXRlTW9kaWZpZWQ6IGZha2VyLmRhdGUucGFzdCgxKSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFrZXIucmFuZG9tLmJvb2xlYW4oKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVDb21tZW50cyh1c2VyczogQXJyYXk8SVVzZXI+KTogQXJyYXk8SUNvbW1lbnQ+IHtcbiAgICAgICAgbGV0IG51bUNvbW1lbnRzID0gXy5yYW5kb20oMCwgNSk7XG4gICAgICAgIGxldCBjb21tZW50cyA9IF8udGltZXMobnVtQ29tbWVudHMsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlQ29tbWVudCh1c2Vycyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tbWVudHM7XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlQ29tbWVudCh1c2VyczogQXJyYXk8SVVzZXI+KTogSUNvbW1lbnQge1xuICAgICAgICBsZXQgY29tbWVudDogSUNvbW1lbnQgPSB7XG4gICAgICAgICAgICBpZDogZmFrZXIucmFuZG9tLnV1aWQoKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRvVGl0bGVDYXNlKGZha2VyLmxvcmVtLnNlbnRlbmNlKDIwLCA0MCkpLFxuICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IGZha2VyLmRhdGUucGFzdCgxKSxcbiAgICAgICAgICAgIGRhdGVNb2RpZmllZDogZmFrZXIuZGF0ZS5wYXN0KDEpLFxuICAgICAgICAgICAgdXNlcjogXy5zYW1wbGUodXNlcnMpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb21tZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZW5lcmF0ZVBUSXRlbXModXNlcnM6IEFycmF5PElVc2VyPik6IEFycmF5PElQVEl0ZW0+IHtcbiAgICAgICAgbGV0IGl0ZW1zID0gXy50aW1lcyhjb25zdE1vZHVsZS5OVU1fUFRfSVRFTVMsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUFRJdGVtKHVzZXJzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cblxuICAgIHByaXZhdGUgdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbiAodHh0KSB7IHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7IH0pO1xuICAgIH1cbn0iXX0=
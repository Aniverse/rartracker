(function(){
	'use strict';

	angular
		.module('app.shared')
		.controller('BonusGigabyteDialogController', BonusGigabyteDialogController);

	function BonusGigabyteDialogController($uibModalInstance, user, UsersResource, settings) {
		this.settings = settings;
		this.user = user;
		this.asyncSelected = null;

		this.gbSelect = [];
		for (var i = this.settings.price, j = 10; i < this.user.bonuspoang; i+=this.settings.price, j+=10) {
			this.gbSelect.push({value: j,  label: j + ' GB för ' + i + 'p'});
		}
		this.settings.gigabyte = this.gbSelect[0].value;

		this.confirm = function () {
			$uibModalInstance.close(this.settings);
		};

		this.cancel = function () {
			$uibModalInstance.dismiss();
		};

		this.onSelected = function (item) {
			this.settings.user = item;
		};

		this.getUsers = function (val) {
			return UsersResource.Users.query({search: val}).$promise.then(users => users);
		};
	}
})();

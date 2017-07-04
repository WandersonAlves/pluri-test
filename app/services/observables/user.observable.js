(function() {
    angular
        .module('pluri')
        .service('UserObservable', UserObservable);

    function UserObservable($q) {
        var self = this,
            defer = $q.defer();

        this.observeUser = function() {
            return defer.promise;
        };

        this.setUser = function(user) {
            self.user = user;
            defer.notify(self.user);
        };

        this.getUser = function() {
            return self.user;
        };
    }
})();

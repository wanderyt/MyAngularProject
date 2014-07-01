'use strict';

(function($LAB, bootstrap) {
    bootstrap();

    $LAB.runQueue()
    .script([
        'scripts/controllers/NavbarCtrl.js'
    ]).wait(function() {
        angular.bootstrap(document, ['app']);
    });
})($LAB, bootstrap);

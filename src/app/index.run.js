(function() {
  'use strict';

  angular
    .module('angularTemplateProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

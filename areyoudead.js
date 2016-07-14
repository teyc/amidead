(function() {
  'use strict';

  function DOMContentLoaded() {

      new Vue({
        el: '#endpoints',
        data: {
          endpoints:
            [
              { 'name': 'Party' },
              { 'name': 'BPM' },
              { 'name': 'Workflow' },
              { 'name': 'DocumentServices' }
            ]
        }
      });
  }

  document.addEventListener('DOMContentLoaded', DOMContentLoaded);

}());

(function() {
  var modal = modalExperiment.modal;
  var getTemplate = modalExperiment.getTemplate;

  modal.appendChild(getTemplate('utilization'));

  var headerLink = document.querySelector('.modal-header a');

  function close() {
    var employeeContent = document.querySelector('.employee-contents');
    employeeContent.className = 'contents employee-contents';
    modal.className = 'modal';
    window.setTimeout(function() {
      employeeContent.remove();
    }, 300);
  }

  headerLink.addEventListener('click', function() {
    var template = getTemplate('employee');
    modal.appendChild(template);
    var employeeContent = document.querySelector('.employee-contents');
    window.setTimeout(function() {
      employeeContent.className = 'contents employee-contents employee-contents-top';
    }, 50);

    modal.className = 'modal employee-modal';

    var closeIcon = document.querySelector('.employee-contents .close-icon');
    closeIcon.addEventListener('click', close);

    var returnLink = document.querySelector('.return a');
    returnLink.addEventListener('click', close);
  });
})();
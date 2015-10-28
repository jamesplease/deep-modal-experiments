(function() {
  // The list of templates, which are the modal faces
  var templates = {
    utilization: document.querySelector('#utilization-modal'),
    employee: document.querySelector('#employee-modal'),
  };

  // Where we place our modal contents
  var modal = document.getElementsByClassName('modal')[0];

  // Returns a new Node from `templateName`
  function getTemplate(templateName) {
    return document.importNode(templates[templateName].content, true);
  }

  window.modalExperiment = {
    modal: modal,
    getTemplate: getTemplate
  };
})();

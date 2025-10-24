(function() {
  const form = document.getElementById('hello-form');
  const input = document.getElementById('name-input');
  const output = document.getElementById('output');

  function greet(name) {
    const safe = (name || 'World').replace(/[<>]/g, '');
    return `Hello, ${safe}!`;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = greet(input.value.trim());
    output.textContent = msg;
    input.focus();
  });

  // Initial announcement for screen readers
  output.textContent = 'Ready.';
})();
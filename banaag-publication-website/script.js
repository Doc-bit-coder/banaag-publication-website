document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('response').textContent = "Thank you for your feedback! We appreciate your support.";
  e.target.reset();
});

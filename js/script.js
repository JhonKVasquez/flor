const envelope = document.getElementById('envelope');

// Al hacer clic en la carta, se abre o se cierra
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

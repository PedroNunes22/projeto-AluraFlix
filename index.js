function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value;
    var trailerFilme = document.getElementById('trailer').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');
    var formatoValido = /\.(jpeg|jpg|gif|png|svg)$/.test(filmeFavorito);
    var videoFormatoValido = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/i.test(trailerFilme);
  
    if (formatoValido) {
      var novoFilme = document.createElement('div');
      novoFilme.classList.add('card-filme');
  
      var imagem = document.createElement('img');
      imagem.src = filmeFavorito;
  
      var linkTrailer = document.createElement('a');
      linkTrailer.href = videoFormatoValido ? trailerFilme : '#';
      linkTrailer.target = '_blank';
      linkTrailer.appendChild(imagem);
  
      if (videoFormatoValido) {
        imagem.addEventListener('click', function() {
          window.open(trailerFilme);
        });
      }
  
      var botaoRemover = document.createElement('button');
      botaoRemover.classList.add('botao-remover-filme');
      botaoRemover.innerHTML = 'Remover';
      botaoRemover.addEventListener('click', function(event) {
        event.currentTarget.closest('.card-filme').remove();
      });
  
      novoFilme.appendChild(linkTrailer);
      novoFilme.appendChild(botaoRemover);
      elementoListaFilmes.appendChild(novoFilme);
  
      document.getElementById('filme').value = '';
      document.getElementById('trailer').value = '';
    } else {
      alert('Por favor, insira um link válido de imagem (JPEG, PNG, GIF ou SVG).');
    }
  }
  
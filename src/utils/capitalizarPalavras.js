/* função para padronizar strings em "Todas As Primeiras Letras Maiúsculas" */
export function capitalizarPalavras(str) {
    return str.replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });
  }
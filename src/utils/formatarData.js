/* função para formatar corretamente as datas para o Gerador de Referências" */
export function formatarData(data, formato) {
  /* formata a data do input para o formato ABNT correto */
  if (formato === "mes-ano") {
    const meses = [
      "jan.",
      "fev.",
      "mar.",
      "abr.",
      "mai.",
      "jun.",
      "jul.",
      "ago.",
      "set.",
      "out.",
      "nov.",
      "dez.",
    ];

    const partes = data.split("-");
    const mes = meses[parseInt(partes[1], 10) - 1];
    const ano = partes[0];

    return `${mes} ${ano}.`;
  } else if (formato === "dia-mes-ano") {
    const meses = [
      "jan.",
      "fev.",
      "mar.",
      "abr.",
      "mai.",
      "jun.",
      "jul.",
      "ago.",
      "set.",
      "out.",
      "nov.",
      "dez.",
    ];

    const partes = data.split("-");
    const dia = partes[2];
    const mes = meses[parseInt(partes[1], 10) - 1];
    const ano = partes[0];

    return `${dia} ${mes} ${ano}.`;
  }
}

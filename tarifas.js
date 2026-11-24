module.exports = {
  estandar: (dias) =>dias * 40,
  premium: (dias) =>dias * 70 + 15,
  semanal: (dias) => (dias >= 7 ? dias *30 : dias *40),
};
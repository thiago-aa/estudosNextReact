// o colchete duplo torna opcional a passagem de parametros, os "..." servem para possibilitar a passagem de um numero indefinido de parâmetros

export default (req, res) => {
  res.status(200).json({
    params: req.query
  })
}
export default (req, res) => {
  res.status(200).json(req.method === 'GET' ? {nome: "jão?"} : {nome: "zé."} )
}
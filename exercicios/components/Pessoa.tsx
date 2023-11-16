interface PessoaProps {
  nome: string
  idade?: number //valor opcional
}

export default (props: PessoaProps) => (
  <div>
    <h1>{props.nome}</h1>
    <h2>Idade: {props.idade ?? 'Não informada'}</h2>
  </div>
)
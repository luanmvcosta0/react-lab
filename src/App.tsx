import { use, useState } from 'react'

interface AlunoProps{
    nome: string,
    cargo: string
  }

export default function App() {
  const[aluno, setAluno] =  useState<AlunoProps>({
    nome: "Visitante",
    cargo: ""
  })

  function login() {
    setAluno({
      nome: "Luan Costa",
      cargo: "Desenvolvedor Fullstack"
    })
  }

  function sair() {
    setAluno({
      nome: "Visitante",
      cargo: ""
    })
  }

  return(
    <div>
      <h1>Conhecendo useState</h1>
      <button onClick={login}>
        Entrar no site
      </button>
      <button onClick={sair}>
        Sair do site
      </button>
      <h4>Olá {aluno.nome}</h4>
      <strong>{aluno.cargo}</strong>
    </div>
  )
}

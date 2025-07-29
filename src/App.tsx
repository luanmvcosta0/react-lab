import { Header } from './components/header'
import { Aluno } from './components/aluno'
import { Footer} from './components/footer' 

export default function App() {
  return(
    <div>
      <Header title='Bem vindos ao Athletes!'/>

      <Aluno nome="Leticia Buled" idade={24}/>
      <Aluno nome="Luan Costa" idade={21}/>
      <Aluno nome="Lucca Costa" idade={12}/>

      <Footer/>
      </div>
  )
}

import { useState } from 'react';
import './App.css'
import FormCotization from './components/FormCotization'
import Header from './components/Header'
import Result from './components/Result';
import Message from './components/Message';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [term, setTerm] = useState("");
  const [totalLoan, setTotalLoan] = useState(0);
  return (
    <>
      <Header title={"Cotizador de Preciós ..."} />
      <div className='container'>
        <FormCotization 
        quantity={quantity} 
        setQuantity={setQuantity}
        term={term}
        setTerm={setTerm} 
        setTotalLoan={setTotalLoan}  
        />
      </div>
      <div className='mensaje'>
        { totalLoan == 0? <Message />:
          <Result totalLoan={totalLoan} quantity={quantity} term={term} />
        }
      </div>
    </>
  )
}

export default App

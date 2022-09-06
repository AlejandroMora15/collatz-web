import { Button } from '@mui/material'
import { useState } from 'react'
import './App.css'
import { Collatz } from './Pages/Collatz'
import { CollatzResults } from './Pages/CollatzResults'
import { InputMain } from './Pages/InputMain'

function App (): JSX.Element {
  const [value, setValue] = useState(1)
  const [results, setResults] = useState<number[]>([])

  const handleSubmit = (): void => {
    const result: number[] = Collatz(value)
    setResults(result)
  }

  const reset = (): void => {
    setValue(1)
    setResults([])
  }

  return (
    <div className="App">
      <h1>Conjetura de Collatz</h1>
      <div className="card">
        <InputMain value={value} setValue={setValue} />
      </div>
      <div className='button-container'>
        <Button
          variant='contained'
          disabled={value < 1}
          onClick={handleSubmit}
        >
          Ejecutar
        </Button>
        <Button
          variant='outlined'
          onClick={reset}
        >
          Limpiar
        </Button>

      </div>
      { results.length > 0
        ? <CollatzResults data={results} />
        : <></>
      }
    </div>
  )
}

export default App

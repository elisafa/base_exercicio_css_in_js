import { FormEvent, useState } from 'react'
import { Formulario } from './styles'

import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </Formulario>
  )
}
export default FormVagas

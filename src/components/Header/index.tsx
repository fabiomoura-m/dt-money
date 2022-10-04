import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import * as Dialog from '@radix-ui/react-dialog'
import logoImage from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Header() {
  const { open, setOpen } = useContext(TransactionsContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

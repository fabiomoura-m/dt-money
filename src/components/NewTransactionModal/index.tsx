import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    CloseButton,
    Content,
    Overlay,
    TransactionType,
    TransactionTypeButton
} from './style';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionsFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionsFormSchema>;

export function NewTransactionModal() {
    const { createTransaction, setOpen } = useContext(TransactionsContext);

    const {
        register,
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionsFormSchema),
        defaultValues: {
            type: 'income'
        }
    });

    function closeModal() {
        setOpen(false);
    }

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        createTransaction(data);
        closeModal();
        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton
                                        variant="income"
                                        value="income"
                                    >
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton
                                        variant="outcome"
                                        value="outcome"
                                    >
                                        <ArrowCircleDown size={24} />
                                        Saida
                                    </TransactionTypeButton>
                                </TransactionType>
                            );
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    );
}

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState
} from 'react';
import { api } from '../lib/axios';

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
    createdAt: string;
}

interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
    setOpen: Dispatch<SetStateAction<boolean>>;
    open: boolean;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [open, setOpen] = useState(false);

    async function fetchTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        });

        setTransactions(response.data);
    }

    async function createTransaction(data: CreateTransactionInput) {
        const { description, category, price, type } = data;

        const response = await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date()
        });

        setTransactions(state => [response.data, ...state]);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                fetchTransactions,
                createTransaction,
                open,
                setOpen
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

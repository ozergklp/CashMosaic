import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { expenses } from '../../expenses'


describe('Header', () => {

    it('should render the "Expense Tracker" heading', () => {
        render(<Header expenses={expenses}/>);

        const header = screen.getByRole('heading',{
            name: 'Expense Tracker'
        });

        expect(header).toBeInTheDocument();
    })
    
    it('should render the balance ', () => {
        render(<Header expenses={expenses}/>);

        const balance = screen.getByRole("heading",{
            level: 1,
        });

        expect(balance).toHaveTextContent("$420.00")
    })

    it('should render the income ', () => {
        render(<Header expenses={expenses}/>);

        const income = screen.getByTestId("income");

        expect(income).toHaveTextContent("$450")
    })

    it('should render the expense ', () => {
        render(<Header expenses={expenses}/>);

        const expense = screen.getByTestId("expense");

        expect(expense).toHaveTextContent("$30")
    })

    it('should render with an empty array', () => {
        render(<Header expenses={[]}/>);

        const yourBalance = screen.queryByRole('heading',{
            level: 3
        });

        expect(yourBalance).toBeNull();
    })





})
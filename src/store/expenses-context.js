import { createContext, useReducer } from 'react';
// import { dummy_expenses } from './dummy-data';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      // const id = Math.floor(Math.random() * 1000 + 1);
      // return [{ ...action.payload, id: 'EXP' + id }, ...state];
      return [action.payload, ...state];
    case 'SET_EXPENSES':
      const inveretedData = action.payload;
      return inveretedData;
    case 'UPDATE':
      const getUpdatableExpenseId = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const findUpdatableItem = state[getUpdatableExpenseId];
      const updatedItem = { ...findUpdatableItem, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[getUpdatableExpenseId] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);
  // const [expensesState, dispatch] = useReducer(expensesReducer, dummy_expenses);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: 'SET_EXPENSES', payload: expenses });
  }
  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;

import axios from 'axios';

const BACKEND_URL =
  'https://react-native-expo-29f55-default-rtdb.firebaseio.com';

/* export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
} 
*/

//firebase database api
export async function storeExpense_in_DB(expenseData) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData
  );
  const id = response.data.name;
  // console.log(id);
  return id;
}

export async function fetchExpensesFromDB() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');
  const expenses = [];
  for (const key in response.data) {
    const expensesObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expensesObj);
  }
  return expenses;
}

export function updateExpense_in_DB(id, expenseData) {
  const updatedResponse = axios.put(
    BACKEND_URL + `/expenses/${id}.json`,
    expenseData
  );
  return updatedResponse;
}

export function deleteExpenseFromDB(id) {
  const deletedItem = axios.delete(BACKEND_URL + `/expenses/${id}.json`);
  return deletedItem;
}

<template>
    <body>
        <header>
            <router-link to="/HomePage" class="back-button">⬅</router-link>
            <h1>Expense Management</h1>
        </header>
        <main>
            <h2>Expense List</h2>
            <MessageComponent ref="messageComponent" />
            <table>
                <thead>
                    <tr>
                        <th>Expense Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="expense in expenses" :key="expense.id">
                        <td>{{ expense.expensetype }}</td>
                        <td>{{ expense.Amount }}</td>
                        <td>{{ expense.Date }}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Add Expense</h2>
            <form @submit.prevent="addExpense">
                <label for="expenseType">Expense Type</label>
                <input class="expense-input" v-model="newExpense.expensetype" type="text" id="expenseType"
                    name="expenseType" required>

                <label for="expenseAmount">Expense Amount</label>
                <input class="expense-input" v-model="newExpense.Amount" type="number" id="expenseAmount"
                    name="expenseAmount" required>

                <label for="expenseDate">Date Added</label>
                <input class="expense-input" v-model="newExpense.Date" type="date" id="expenseDate" name="expenseDate"
                    required>

                <button class="expense-button" type="submit">Add Expense</button>
            </form>
        </main>
    </body>
</template>
<script>
import { collection, getDocs, addDoc } from 'firebase/firestore';
import MessageComponent from './MessageComponent.vue';
export default {
    components: {
        MessageComponent,
    },
    data() {
        return {
            expenses: [],
            newExpense: {
                expensetype: '',
                Amount: '',
                Date: '',
            },
        };
    },
    created() {
        this.fetchExpenses();
    },
    methods: {
        async fetchExpenses() {
            try {
                const querySnapshot = await getDocs(collection(this.$firebase.firestore, 'expenses'));
                this.expenses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        },
        async addExpense() {
            try {
                const docRef = await addDoc(collection(this.$firebase.firestore, 'expenses'), {
                    expensetype: this.newExpense.expensetype,
                    Amount: this.newExpense.Amount + '$',
                    Date: this.newExpense.Date,
                });
                this.expenses.push({ id: docRef.id, ...this.newExpense });
                this.newExpense = { expensetype: '', Amount: '', Date: '' };
                this.$refs.messageComponent.openMessageBox("Expense saved successfully");
                this.fetchExpenses();
            } catch (error) {
                console.error('Error adding expense:', error);
            }
        },
    },
};
</script>
<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}

.back-button{
    float: left;
    color: white;
    padding-left: 15px;
    font-size: xxx-large;
}


main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #333;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

form {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
}

input,
button {
    padding: 8px;
    margin-bottom: 10px;
    display: block;
    width: 100%;
}

button {
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

.expense-input {
    border-radius: 5px;
    width: 98%;
}

.expense-button {
    border-radius: 5px;
    width: 100%;
}
</style>
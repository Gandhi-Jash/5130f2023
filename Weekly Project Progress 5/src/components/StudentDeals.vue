<template>
    <body>        
        <header>
            <router-link to="/HomePage" class="back-button">⬅</router-link>
            <h1>Student Deals</h1>
        </header>

        <main>
            <h2>Available Deals</h2>
            <table>
                <tbody>
                    <tr v-for="deal in deals" :key="deal.id">
                        <td>{{ deal.data }}</td>
                    </tr>
                </tbody>
            </table>
        </main>

    </body>
</template>
<script>
import { collection, getDocs } from 'firebase/firestore';
export default {
    data() {
        return {
            deals: [],
        };
    },
    created() {
        this.fetchDeals();
    },
    methods: {
        async fetchDeals() {
            try {
                const querySnapshot = await getDocs(collection(this.$firebase.firestore, 'deals'));
                this.deals = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            } catch (error) {
                console.error('Error fetching deals:', error);
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
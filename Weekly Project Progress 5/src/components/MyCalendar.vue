<template>
    <body>
        <header>
            <router-link to="/HomePage" class="back-button">⬅</router-link>
            <h1>Calendar</h1>
        </header>
        <main>
            <h2>Upcoming Events</h2>
            <MessageComponent ref="messageComponent" />
            <table class="event-table">
                <tr v-for="event in events" :key="event.id">
                    <td>{{ event.date }}</td>
                    <td>{{ event.eventtype }}</td>
                    <td>
                        <button class="delete-event-button" @click="deleteEvent(event.id)">Delete</button>
                    </td>
                </tr>
            </table>
            <h2>Add Event</h2>
            <form @submit.prevent="addEvent">
                <label for="description">Description</label>
                <input class="expense-input" v-model="newEvent.description" type="text" id="description" name="description"
                    required>

                <label for="eventDate">Date</label>
                <input class="expense-input" v-model="newEvent.date" type="date" dateid="eventDate" name="eventDate"
                    required>

                <button class="expense-button" type="submit">Add Event</button>
            </form>
        </main>
    </body>
</template>
<script>
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import MessageComponent from './MessageComponent.vue';
export default {
    components: {
        MessageComponent,
    },
    data() {
        return {
            events: [],
            newEvent: {
                description: '',
                date: '',
            },
        };
    },
    created() {
        this.fetchEvents();
    },
    methods: {
        async fetchEvents() {
            try {
                const querySnapshot = await getDocs(collection(this.$firebase.firestore, 'events'));
                this.events = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        },
        async addEvent() {
            try {
                const docRef = await addDoc(collection(this.$firebase.firestore, 'events'), {
                    date: this.newEvent.date,
                    eventtype: this.newEvent.description,
                });
                this.events.push({ id: docRef.id, ...this.newEvent });
                this.newEvent = { date: '', eventtype: '', };
                this.$refs.messageComponent.openMessageBox("Event saved successfully");
                this.fetchEvents();
            } catch (error) {
                console.error('Error adding expense:', error);
            }
        },
        async deleteEvent(eventId) {
            try {
                const isConfirmed = window.confirm('Are you sure you want to delete this event?');
                if (!isConfirmed) {
                    return;
                }
                const eventDocRef = doc(collection(this.$firebase.firestore, 'events'), eventId);
                await deleteDoc(eventDocRef);
                this.events = this.events.filter(event => event.id !== eventId);
            } catch (error) {
                console.error('Error deleting event:', error);
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

.delete-event-button {
    background-color: #ff6961;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 5px;
}

.event-table {
    width: 100%;
    border-collapse: collapse;
}

.event-table td {
    border: none;
    padding: 8px;
    text-align: left;
}

.event-table tr {
    margin-bottom: 5px;
}

.event-date {
    white-space: nowrap;
}
</style>
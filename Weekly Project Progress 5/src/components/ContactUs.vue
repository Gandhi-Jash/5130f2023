<template>
    <body>
        <header>
            <router-link to="/HomePage" class="back-button">⬅</router-link>
            <h1>Contact Us</h1>
        </header>
        <main>
            <div class="persons-container">
                <div class="person">
                    <h2>Jash Gandhi</h2>
                    <p>Master's in Computer Science</p>
                    <p>Email: <a href="mailto:jash_gandhi@student.uml.edu">jash_gandhi@student.uml.edu</a></p>
                    <p><a href="https://www.linkedin.com/in/jashgandhi/" target="_blank">Conact on LinkedIn</a></p>                    
                </div>

                <div class="person">
                    <h2>Harshitha Dodda</h2>
                    <p>Master's in Computer Science</p>
                    <p>Email: <a href="mailto:harshitha_dodda@student.uml.edu">harshitha_dodda@student.uml.edu</a></p>
                    <p><a href="https://www.linkedin.com/in/harshithadodda/" target="_blank">Conact on LinkedIn</a></p>
                </div>
            </div>
        </main>
    </body>
</template>

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

.back-button {
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

.persons-container {
    display: flex;
    justify-content: space-between;
}

.person {
    flex: 1;
    padding: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin: 0 5px;
}

.person h2 {
    font-size: 18px;
    /* Adjust font size as needed */
}

.person p {
    font-size: 14px;
    /* Adjust font size as needed */
}

.person a {
    color: #007BFF;
    /* Link color */
}</style>

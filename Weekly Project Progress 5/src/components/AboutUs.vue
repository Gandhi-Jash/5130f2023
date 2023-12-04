<template>
    <body>
        <header>
            <router-link to="/HomePage" class="back-button">⬅</router-link>
            <h1>About Us</h1>
        </header>
        <main>
            <p>
                Welcome to Student Aid, your ultimate companion in navigating the intricate journey of student life! We
                understand the challenges that come with managing finances, finding great deals, and keeping track of a
                hectic schedule. That's why we've created a comprehensive solution with three key components to make your
                life as a student easier and more enjoyable.
            </p>

            <section>
                <h2>Expense Management</h2>
                <p>
                    College life often comes with tight budgets and unexpected expenses. With our Expense Management feature,
                    you can effortlessly keep track of your spending, ensuring that you stay within your financial limits.
                    Easily input and categorize your expenses, set budgets, and receive insightful summaries of your spending
                    patterns. Whether it's textbooks, meals, or leisure activities, our app empowers you to take control of your
                    finances and make informed decisions.
                </p>
            </section>

            <section>
                <h2>Student Deals</h2>
                <p>
                    Why pay full price when you can enjoy exclusive discounts tailored just for you? Our Student Deals section
                    is your gateway to unbeatable offers on a variety of products and services. From technology and fashion to
                    entertainment and dining, we've partnered with businesses to bring you the best deals around. Save money
                    while still enjoying the things you love – because being a student doesn't mean you have to miss out on
                    great experiences!
                </p>
            </section>

            <section>
                <h2>Event Management</h2>
                <p>
                    Never miss a deadline or social event again with our Event Management and Calendar feature. Keep track of
                    your classes, assignments, exams, and extracurricular activities in one centralized calendar. Receive
                    reminders for important dates and seamlessly integrate your schedule with friends. Planning events has never
                    been easier – organize study groups, parties, and club meetings effortlessly, all within the app.
                </p>
            </section>

            <p>
                At Student Aid, we're not just about managing expenses; we're about enhancing your entire student experience.
                Our mission is to empower you to thrive academically, socially, and financially. With a user-friendly
                interface and powerful features, we aim to simplify the complexities of student life so you can focus on
                what matters most – your education and personal growth.
            </p>
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

section {
    margin-bottom: 20px;
}

h2 {
    color: #333;
    border-bottom: 2px solid #333;
    padding-bottom: 5px;
    font-size: 1.5em;
}

p {
    line-height: 1.6;
    font-size: 1em;
    color: #333;
}
</style>

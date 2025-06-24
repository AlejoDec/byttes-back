import express from 'express';

const app = express();

let users = [
    {
        name: "John Doe",
        email: "jonh@email.com",
        password: "password123"
    }
];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/test', (req, res) => {
    res.send({
        message: 'This is a test endpoint',
        timestamp: new Date().toISOString(),
        status: 'success'
    })
});

app.post('/users', (req, res) => {
    try {
        users.push(user);
        res.status(201).send({
            message: "User created successfully"
        });
    } catch (err) {
        res.send({
            message: "An error occurred while creating the user",
            error: err.message
        })
    }
});

app.get('/users', (req, res) => {

    if (users.length === 0) res.send({ message: "No users found" });

    res.send(users);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
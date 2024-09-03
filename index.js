const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());


// order creation
app.post('/webhook/order-created', (req, res) => {
    console.log('Order Created:', req.body);

    res.status(200).send('Order Created Webhook received');
});


// order updates
app.post('/webhook/order-updated', (req, res) => {
    console.log('Order Updated:', req.body);

    res.status(200).send('Order Updated Webhook received');
});


// fulfillment creation
app.post('/webhook/fulfillment-created', (req, res) => {
    console.log('Fulfillment Created:', req.body);
    
    res.status(200).send('Fulfillment Created Webhook received');
});


// fulfillment updates
app.post('/webhook/fulfillment-updated', (req, res) => {
    console.log('Fulfillment Updated:', req.body);

    res.status(200).send('Fulfillment Updated Webhook received');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


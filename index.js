const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());


function verifyShopifyWebhook(req, res, buf) {
    const secret = process.env.SHOPIFY_WEBHOOK_SECRET;
    const hash = crypto
        .createHmac('sha256', secret)
        .update(buf)
        .digest('base64');
    
    const hmac = req.get('X-Shopify-Hmac-Sha256');
    if (hash !== hmac) {
        throw new Error('Webhook verification failed');
    }
}

// order creation
app.post('/webhook/order-created', (req, res) => {
    try {
        console.log("enter");
        console.log('Order Created:', req.body);
        res.status(200).send('Order Created Webhook received');
    } catch (error) {
        console.error('Error processing order creation webhook:', error);
        res.status(500).send('Error processing webhook');
    }
});

// order updates
app.post('/webhook/order-updated', (req, res) => {
    try {
        console.log('Order Updated:', req.body);
        res.status(200).send('Order Updated Webhook received');
    } catch (error) {
        console.error('Error processing order update webhook:', error);
        res.status(500).send('Error processing webhook');
    }
});

// fulfillment creation
app.post('/webhook/fulfillment-created', (req, res) => {
    try {
        console.log('Fulfillment Created:', req.body);
        res.status(200).send('Fulfillment Created Webhook received');
    } catch (error) {
        console.error('Error processing fulfillment creation webhook:', error);
        res.status(500).send('Error processing webhook');
    }
});

// fulfillment updates
app.post('/webhook/fulfillment-updated', (req, res) => {
    try {
        console.log('Fulfillment Updated:', req.body);
        res.status(200).send('Fulfillment Updated Webhook received');
    } catch (error) {
        console.error('Error processing fulfillment update webhook:', error);
        res.status(500).send('Error processing webhook');
    }
});

// Start the server
const PORT = 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

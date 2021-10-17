import braintree from "braintree";
import dotenv from "dotenv";

dotenv.config();

// Setup payment gateway with braintree
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANT_ID,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
});

// Create payment token
export const getToken = (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    if (err) {
      res.status(500);
      throw new Error(err.message);
    } else {
      res.send(response);
    }
  });
};

export const processPayment = (req, res) => {
  const clientNonce = req.body.paymentMethodNonce;
  const clientAmount = req.body.amount;
  const { orderId } = req.body.orderId;
  gateway.merchantAccount.createForCurrency({
    currency: "USD",
  });
  gateway.transaction.sale(
    {
      orderId,
      amount: clientAmount,
      paymentMethodNonce: clientNonce,
      options: {
        submitForSettlement: true,
      },
    },
    (err, result) => {
      if (err) {
        res.status(500);
        throw new Error(err.message);
      } else {
        res.json(result);
      }
    }
  );
};

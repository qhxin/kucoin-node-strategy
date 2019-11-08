
import http from '../lib/http';
import log from '../lib/log';

class Currency {

    getCurrencies = async () => {
        // GET /api/v1/currencies
        let result = false;

        try {
            /*
            {  
                "code":"200000",
                "msg":"success",
                "data": [{
                    "currency": "BTC",
                    "name": "BTC",
                    "fullName": "Bitcoin",
                    "precision": 8,
                    "withdrawalMinSize": "0.002",
                    "withdrawalMinFee": "0.0005",
                    "isWithdrawEnabled": true,
                    "isDepositEnabled": true,
                    "isMarginEnabled": true,
                    "isDebitEnabled": true
                },
                {
                    "currency": "ETH",
                    "name": "ETH",
                    "fullName": "Ethereum",
                    "precision": 8,
                    "withdrawalMinSize": "0.02",
                    "withdrawalMinFee": "0.01",
                    "isWithdrawEnabled": true,
                    "isDepositEnabled": true,
                    "isMarginEnabled": true,
                    "isDebitEnabled": true
                }]
            }
            */
            const { data } = await http.get('/api/v1/currencies');
            result = data;
        } catch (e) {
            log('get currency error', e);
        }
        return result;
    }
}

export default Currency;
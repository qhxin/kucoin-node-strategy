import http from '../lib/http';
import log from '../lib/log';

class Account {

    getOverview = async () => {
        // GET /api/v1/accounts
        let result = false;

        try {
            /*
            { 
                "code": "200000",
                "data": [{
                    "id": "5bd6e9286d99522a52e458de",  //accountId
                    "currency": "BTC",  //币种
                    "type": "main",     //账户类型，储蓄（main）账户、交易(trade)账户或杠杆（margin）账户
                    "balance": "237582.04299",  //资金总额
                    "available": "237582.032",  //可用金额
                    "holds": "0.01099". //冻结金额
                },
                {
                    "id": "5bd6e9216d99522a52e458d6",
                    "currency": "BTC",
                    "type": "trade",
                    "balance": "1234356",
                    "available": "1234356",
                    "holds": "0"
                }]
            }
            */
            const { data } = await http.get('/api/v1/accounts', { type: 'trade' });
            result = data;
        } catch (e) {
            log('get account trade error', e);
        }
        return result;
    }

}

export default Account;
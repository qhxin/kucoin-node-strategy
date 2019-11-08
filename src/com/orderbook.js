
import http from '../lib/http';
import log from '../lib/log';

class OrderBook {

    level2Light = async (code) => {
        // GET /api/v1/market/orderbook/level2_20?symbol=SYMBOLCODE
        let result = false;

        try {
            /*
            {  
                "code":"200000",
                "msg":"success",
                "data":1546837113087
            }
            */
            const { data } = await http.get(`/api/v1/market/orderbook/level2_20?symbol=${code}`);
            result = data;
        } catch (e) {
            log('get timestamp error', e);
        }
        return result;
    }
}

export default OrderBook;
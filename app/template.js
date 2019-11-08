/**
 * An example strategy template
 */
import _ from 'lodash';
import logUpdate from 'log-update';
import delay from '../src/lib/delay';
import http from '../src/lib/http';
import log from '../src/lib/log';
import Time from '../src/com/time';
import { getEnv } from '../src/lib/env';

const env = getEnv();

async function main() {
    log('main start');
    // set account api keys
    http.setSignatureConfig(env);

    const time = new Time();

    while(true) {
        const ts = await time.getTimestamp();

        logUpdate.clear();
        logUpdate(`------------------------\n` +
            `${ts}` +
            `\n------------------------\n`
        );
        await delay(1000);
    }
}

main();

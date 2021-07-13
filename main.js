// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const author = require('./author');
const subscriber = require('./subscriber');


async function main() {
    // Step 1: Create author with new seed
    console.log('\n');
    console.log('\x1b[36m%s\x1b[0m', 'Step 1');
    let authorInstance = await author.createAuthor();

    // Step 2: Send channel announcement
    console.log('\n');
    console.log('\x1b[36m%s\x1b[0m', 'Step 2');
    await author.announceChannel(authorInstance.clone());

    // Step 3: Create subscriber with new seed
    console.log('\n');
    console.log('\x1b[36m%s\x1b[0m', 'Step 3');
    let subscriberInstance = await subscriber.createSubscriber();

    // Step 4: Receive channel announcement and send subscription message
    console.log('\n');
    console.log('\x1b[36m%s\x1b[0m', 'Step 4');
    await subscriber.subscribeChannel(subscriberInstance.clone());

    // Step 5: Receive channel subscription
    console.log('\n');
    console.log('\x1b[36m%s\x1b[0m', 'Step 5');
    await author.receiveSubscription(authorInstance.clone());

    // Step 6: Syncronize channel state and send tagged packet
    console.log('\n');
    console.log('\x1b[36m%s\x1b[0m', 'Step 6');
    await subscriber.sendTaggedPacket(subscriberInstance.clone());

    // Step 7: Fetch new messages
    console.log('\n');
    console.log('\x1b[36m%s\x1b[0m', 'Step 7');
    await author.fetchNewMessages(authorInstance.clone());

    // Step 8: Send multiple signed packets
    console.log('\x1b[36m%s\x1b[0m', 'Step 8');
    await subscriber.sendMultipleSignedPackets(subscriberInstance.clone());

    // Step 9: Fetch new messages
    console.log('\x1b[36m%s\x1b[0m', 'Step 9');
    await author.fetchNewMessages(authorInstance.clone());
}

main()
// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const streams = require("@iota/streams/node");
const fetch = require("node-fetch");
const { createSeed, from_bytes, getExplorerUrl } = require('./helpers');
const { readFileSync, writeFileSync } = require('fs');

global.fetch = fetch;
global.Headers = fetch.Headers;
global.Request = fetch.Request;
global.Response = fetch.Response;

streams.set_panic_hook();

// Node settings
let node = "https://chrysalis-nodes.iota.org/";
let options = new streams.SendOptions(node, 9, true, 1);

async function createAuthor() {
  console.log('\x1b[36m%s\x1b[0m', 'Author: Create author and new channel');

  // Create author with new seed
  let authorSeed = createSeed();
  let author = new streams.Author(authorSeed, options.clone(), false);
  
  console.log("Author seed: ", authorSeed);
  console.log("Channel address: ", author.channel_address());
  console.log("Multi branching: ", author.is_multi_branching());

  return(author.clone());
}


async function announceChannel(author) {
  console.log('\x1b[36m%s\x1b[0m', 'Author: Send announcement');

  // Announce new channel
  let response = await author.clone().send_announce();
  let announcementLink = response.link;
  console.log("Announcement link: ", announcementLink.toString());

  //Fetch message details
  let announcementMessageDetails = await author.clone().get_client().get_link_details(announcementLink.copy());
  console.log('\x1b[34m%s\x1b[0m', getExplorerUrl("mainnet", announcementMessageDetails.get_metadata().message_id));

  // Write announcement link to off-Tangle link exchange
  writeFileSync('./offTangleComs/1_announcement.txt', announcementLink.toString());
}


async function receiveSubscription(author) {
  console.log('\x1b[36m%s\x1b[0m', 'Author: Receive subscription and send keyload message');

  // Receive subscription
  let subscriptionLinkString = readFileSync('./offTangleComs/2_subscription.txt', 'utf8');
  let subscriptionLink = streams.Address.parse(subscriptionLinkString);
  await author.clone().receive_subscribe(subscriptionLink.copy());

  // Read announcement message
  let announcementLinkString = readFileSync('./offTangleComs/1_announcement.txt', 'utf8');
  let announcementLink = streams.Address.parse(announcementLinkString);

  // Send keyload message
  response = await author.clone().send_keyload_for_everyone(announcementLink);
  let keyloadLink = response.link;
  console.log("Keyload link: ", keyloadLink.toString());

  //Fetch message details
  let keyloadMessageDetails = await author.clone().get_client().get_link_details(keyloadLink.copy());
  console.log('\x1b[34m%s\x1b[0m', getExplorerUrl("mainnet", keyloadMessageDetails.get_metadata().message_id));

  // Write keyload link to off-Tangle link exchange
  writeFileSync('./offTangleComs/3_keyload.txt', keyloadLink.toString());
}


async function fetchNewMessages(author) {
  console.log('\x1b[36m%s\x1b[0m', 'Author: Fetch new messages from channel');
  
  // Fetch new messages
  let exists = true;
  while (exists) {
    let responses = await author.clone().fetch_next_msgs();

    if (responses.length === 0) {
      exists = false;
    }

    for (var i = 0; i < responses.length; i++) {
      const messageLink = responses[i].link;
      console.log("Message link:",      responses[i].link.toString());

      //Fetch message details
      let messageDetails = await author.clone().get_client().get_link_details(messageLink.copy());
      console.log('\x1b[34m%s\x1b[0m', getExplorerUrl("mainnet", messageDetails.get_metadata().message_id));

      console.log("Public payload: ",   from_bytes(responses[i].message.get_public_payload()));
      console.log("Masked payload: ",   from_bytes(responses[i].message.get_masked_payload()));
      console.log("\n");
    }
  }
}


exports.createAuthor = createAuthor;
exports.announceChannel = announceChannel;
exports.receiveSubscription = receiveSubscription;
exports.fetchNewMessages = fetchNewMessages;
#### Output from running main.js should look similar to this:

```
Step 1
Author: Create author and new channel
Author seed:  2230062959a9faca12bed996587d0dc04f980b94b1cf21fe70d0d45531965010
Channel address:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000
Multi branching:  false


Step 2
Author: Send announcement
Announcement link:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:55a96373c898120dc0b9907e
https://explorer.iota.org/mainnet/message/f1f4ae2db748a9166e96de10f246d0396d65677ae92d1921d77398df5cba5b21


Step 3
Subscriber: Create subscriber
Subscriber seed:  17787a0731bccb0bd441906aa21d5e1e790b688812d2193483407abe2d977d89


Step 4
Subscriber: Receive announcement and subscribe to channel
Subscription link:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:6685339655f476f9bca2ff86
https://explorer.iota.org/mainnet/message/f89effa9b64f66616ee33badc2f287fc4a364000d61a4c67d977ffb117d906e7


Step 5
Author: Receive subscription and send keyload message
Keyload link:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:ed94ffff2dca2dd232545389
https://explorer.iota.org/mainnet/message/dd47500a9e3862237a3f4d7b62124be11b62e35f67ee841cd2858f0920ed23f2


Step 6
Subscriber: Synchronize channel state and send tagged packet
Tagged packet link:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:6731dedf0ccb506677ec7b08
https://explorer.iota.org/mainnet/message/43f4203f3ccd922f8946c8834713d5b12cb22bf35dd61bba36c3d3db9b0f4573


Step 7
Author: Fetch new messages from channel
Message link: 8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:ed94ffff2dca2dd232545389
https://explorer.iota.org/mainnet/message/dd47500a9e3862237a3f4d7b62124be11b62e35f67ee841cd2858f0920ed23f2
Public payload:
Masked payload:


Message link: 8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:6731dedf0ccb506677ec7b08
https://explorer.iota.org/mainnet/message/43f4203f3ccd922f8946c8834713d5b12cb22bf35dd61bba36c3d3db9b0f4573
Public payload:  This is public payload
Masked payload:  This is masked payload


Step 8
Subscriber: Synchronize channel state and send multiple signed packets
Signed packet #1 link:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:01c76563f31bd52d04458b44
https://explorer.iota.org/mainnet/message/f8fcfa5982cdca52a4257c94d2d8bf9d187d8455326d05ed71d7cb3c7f291497


Signed packet #2 link:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:ba1a0996332ae91d83bb168b
https://explorer.iota.org/mainnet/message/e65ba980ce6c920fb403ac5ace6d55988156fd414f8b7891e99287b3fb322e7d


Signed packet #3 link:  8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:8f8f6693d3ba2c92fd0d6f47
https://explorer.iota.org/mainnet/message/713ecee59797253a95a9550f3a7c66a86dde24d6d1fcae4129052a557f45d701


Step 9
Message link: 8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:01c76563f31bd52d04458b44
https://explorer.iota.org/mainnet/message/f8fcfa5982cdca52a4257c94d2d8bf9d187d8455326d05ed71d7cb3c7f291497
Public payload:  This is public payload of message #1
Masked payload:  This is masked payload of message #1


https://explorer.iota.org/mainnet/message/e65ba980ce6c920fb403ac5ace6d55988156fd414f8b7891e99287b3fb322e7d
Public payload:  This is public payload of message #2
Masked payload:  This is masked payload of message #2


Message link: 8db1b8ca64cb153ec6d90cddcddb84e7606c0d4841249a86390fb00fab6ad6f20000000000000000:8f8f6693d3ba2c92fd0d6f47
https://explorer.iota.org/mainnet/message/713ecee59797253a95a9550f3a7c66a86dde24d6d1fcae4129052a557f45d701
Public payload:  This is public payload of message #3
Masked payload:  This is masked payload of message #3
```
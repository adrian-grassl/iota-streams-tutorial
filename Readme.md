### Expected output from main.js

####Step 1
**Author: Create author**
Author seed:  22f73f060c48c51d7ecad204b7fb8f33684a024d909fbc047f5029efb2ec1a94
Channel address:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000
Multi branching:  false

####Step 2
**Author: Create channel**
Announcement at:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:254c87153787aad887755e01

####Step 3
**Subscriber: Create subscriber**
Subscriber seed:  966ea8f2d56c1400fecba4476edde77f405765e909102bafe441271b3397f883

####Step 4
**Subscriber: Receive announcement and subscribe to channel**
Subscription at:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:aee870d4ab3b2f62bdb4d5e9

####Step 5
**Author: Receive subscription and send keyload message**
Keyload at:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:78f47cb32dc409f5530d9b73

####Step 6
**Subscriber: Synchronize channel state and send tagged packet**
Tagged packet at:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:97dd32db973bfbb6330c5489

####Step 7
**Author: Fetch new messages from channel**
Message link: bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:97dd32db973bfbb6330c5489
Public payload:  This is public payload
Masked payload:  This is masked payload

####Step 8
**Subscriber: Synchronize channel state and send multiple signed packets**
Signed packet #1 at:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:7c3ec910ec927800e1e445ed
Signed packet #2 at:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:4e3c50d70e382824323f508d
Signed packet #3 at:  bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:da2a7c116dd70eab7464dc27

####Step 9
**Author: Fetch new messages from channel**
Message link: bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:7c3ec910ec927800e1e445ed
Public payload:  This is public payload of message #1
Masked payload:  This is masked payload of message #1

Message link: bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:4e3c50d70e382824323f508d
Public payload:  This is public payload of message #2
Masked payload:  This is masked payload of message #2

Message link: bef4b510565137843814350fbf6eded1b12fa66f3bb7d477f89cf714ca1c61ea0000000000000000:da2a7c116dd70eab7464dc27
Public payload:  This is public payload of message #3
Masked payload:  This is masked payload of message #3
#### Expected output from main.js

```
Step 1
Author: Create author
Author seed:  b668c848573bb5a1fe21b69aec9928d5bae18ac42fc41ca3995fdec857220790
Channel address:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000
Multi branching:  false


Step 2
Author: Create channel
Announcement at:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:64fc655fd5fa557c23fd8d2f


Step 3
Subscriber: Create subscriber
Subscriber seed:  2399e695ed0ea2a85d5321c5d33eeb0cddac0a346f8cee0e97d86b9ffd116008


Step 4
Subscriber: Receive announcement and subscribe to channel
Subscription at:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:65215504ac80c59f15f48b8a


Step 5
Author: Receive subscription and send keyload message
Keyload at:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:ba2e189a50d69bfd54774486


Step 6
Subscriber: Synchronize channel state and send tagged packet
Tagged packet at:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:1feaea310d650877964bcf72


Step 7
Author: Fetch new messages from channel
Message link: bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:1feaea310d650877964bcf72
Public payload:  This is public payload
Masked payload:  This is masked payload


Step 8
Subscriber: Synchronize channel state and send multiple signed packets
Signed packet #1 at:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:2ac4475be5fd494dba83fff1
Signed packet #2 at:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:86e994c851e44fa198305c58
Signed packet #3 at:  bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:28f7997fde82b06ef63e22c5


Step 9
Author: Fetch new messages from channel
Message link: bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:2ac4475be5fd494dba83fff1
Public payload:  This is public payload of message #1
Masked payload:  This is masked payload of message #1


Message link: bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:86e994c851e44fa198305c58
Public payload:  This is public payload of message #2
Masked payload:  This is masked payload of message #2


Message link: bffa112bf811fb97ab57f49ac6023585538c7381d2607a748f8e44974786721c0000000000000000:28f7997fde82b06ef63e22c5
Public payload:  This is public payload of message #3
Masked payload:  This is masked payload of message #3
```
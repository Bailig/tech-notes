# Hashing

## SSH

1. use asymmetric encryption to share a symmetric key
1. use the symmetric key for further communication
1. server will use the client's public key to generate a challenge.
1. transmit the challenge to the client for authentication
1. client decrypt the message. it means that the client holds the private key required for a connection
1. done

## Why hash

without hashing, someone can sit in the middle and pretend to be the other and tamper or modify the message.

## Hashing

hashing never meant to decrypt anything.

using hashes we're able to verify the authentication of the message so that no one can tamper or modify the message.

this is done by HMX or hash based Message Authentication codes.

## HMX

each message that is transmitted must contain a something called Mac.

## Mac

Mac is a hash generated from the symmetric key, the packet sequence number and the message contents that were sent.

the mac is sent outside of the symmetrically encrypted area

because client and the host has the same information,

- the symmetric key,
- the packet sequence number, and
- the message content, which is sent via ssh,

they can run the hash function with the same information and compare the result.

if the message is modified, the hash result will be different

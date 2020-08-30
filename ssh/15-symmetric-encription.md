# Symmetric encryption

## Encryption

encryption is a way to jumble up some information (e.g. text) into something that it's impossible for a third party or someone to read without a way to decrypting it.

## Symmetric encryption

symmetric encryption uses one secret key for both the encryption and decryption by both parties.

## SSH

ssh communicate through the shared key.

the problem is anyone that has the key can decrypt the message.

so the key need to be passed in a secure way.

## Key exchange algorithm

key exchange algorithm is A secure way to exchange these keys without any people intercepting it.

what makes this algorithm particularly secure is the fact that the key is never actually transmitted between the client and the host. Instead the two computers share public pieces of data, and then manipulate it to independently calculate the secret key.

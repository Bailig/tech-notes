# Asymmetrical encryption

unlike symmetrical encryption, an asymmetrical encryption uses two separate keys for encryption and decryption.

- those keys are called public and private key pairs
- public key is used to share with other computers, private key is the absolute secrets that you shouldn't share with anybody.
- the private key cannot mathematically compute from the public key.
- information encrypted by machines public key can only be decrypted by the same machines private key.
- public key do the encryption
- private key do the decryption

## SSH

ssh uses asymmetrical encryption during the key exchange algorithm

1. before we initiate a secure connection, both parties generate temporary public and private keys and share their respective public keys to one another.
1. using Diffie Hellman key exchange to generate a symmetrical encryption key. Each machine on its computer can generate this symmetric key from data from each computer without actually passing the symmetric key.

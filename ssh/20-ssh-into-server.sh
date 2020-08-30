
# only if the directory does not exist 
mkdir ~/.ssh

cd ~/.ssh

# -C is to privide a comment
ssh-keygen -C "{email}"

ls
# id_rsa.pub is the public key that you can share
# id_rsa is the private key that you never share

# if you saved as different name
ssh-add ~/.ssh/{private key file name}

# copy the id_rsa.pub to clip board
pbcopy < ~/.ssh/id_rsa.pub

# ssh to the server 
ssh {user}@{host ip}

# to see if the .ssh folder exist
ls -a

# only if the directory does not exist 
mkdir .ssh

cd .ssh

# only if the file does not exist 
touch authorized_keys

nano authorized_keys

# paste the public key in to the file and save

exit

# command+q to quit the terminal to end the password login sesson

# you can ssh to the server without password now
ssh {user}@{host ip}

# done

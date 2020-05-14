# Connecting two nodes directly

This guide is primarily for getting two nodes mining and connected to a swarm on a single machine, for local development. Some of the instructions can still apply to connecting to a devnet.

Optionally, you could look at and modify your own copy of [this script](https://github.com/filecoin-project/go-filecoin/blob/master/functional-tests/retrieval), which sets up two local nodes and does a file store/retrieval.

## Table of contents

- [Initial setup](#initial-setup)
    - [Node 1](#node-1)
    - [Node 2](#node-2)

## Initial setup

First, set the location of the filecoin source (substitute the path with where ever your source tree is cloned):

```sh
export GO_FILECOIN_PATH=$HOME/go/src/github.com/filecoin-project/go-filecoin
```

### Node 1

Initialize go-filecoin in the default directory, and use the genesis file from go-filecoin source. These files will now be in $HOME/.filecoin

```sh
go-filecoin init --genesisfile ./fixtures/genesis.car
```

Run the daemon:
```sh
go-filecoin daemon
```

Get the address of Node 1 with `go-filecoin id`:
```sh
$ go-filecoin id
    {
	"Addresses": [
		"/ip4/127.0.0.1/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL",
		"/ip4/172.16.200.201/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL"
	],
	"ID": "QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL",
	"AgentVersion": "",
	"ProtocolVersion": "",
	"PublicKey": ""
    }
```

For convenience, copy-paste the first address to export as a shell variable:
```sh
export NODE1_ADDR=/ip4/127.0.0.1/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL    
```

### Node 2
This assumes you wish to run two nodes on the same machine for development/testing purposes. If you are trying to connect two separate machines then you will not need to use `--repodir` everywhere unless you do not want to use the default filecoin repo directory in $HOME/.filecoin.

In another terminal, choose where you want the second node's repo directory to be, and supply this to the intialization script with the `--repodir` option. (You can also set the `FIL_PATH` environment variable as an alternative to using the `--repodir` option everywhere).

```sh
go-filecoin init --genesisfile $GO_FILECOIN_PATH/fixtures/genesis.car --repodir=$HOME/.filecoin2
```

Edit the `config.json` file and change the values for api.address and swarm.address to be different from the defaults (which are in use by the first node):

```json
       "api": {                                                                                                                                                            
                "address": "/ip4/127.0.0.1/tcp/3453",                                                                                                                       
                "accessControlAllowOrigin": [//^^^^ change this to a different port/value                                                                                                                              
                        "http://localhost:8080",                                                                                                                            
                        "https://localhost:8080",                                                                                                                           
                        "http://127.0.0.1:8080",                                                                                                                            
                        "https://127.0.0.1:8080"                                                                                                                            
                ],                                                                                                                                                          
                "accessControlAllowCredentials": false,                                                                                                                     
                "accessControlAllowMethods": [                                                                                                                              
                        "GET",                                                                                                                                              
                        "POST",                                                                                                                                             
                        "PUT"                                                                                                                                               
                ]                                                                                                                                                           
        },
...                                                                                 

        "swarm": {                                                                                                                                                          
                "address": "/ip4/0.0.0.0/tcp/6000"                                                                                                                          
        },                                 //^^^^ change this to a different port/value                                                   
...
```

Now you can launch the daemon (in a new terminal):

```sh
go-filecoin daemon --repodir=$HOME/.filecoin2
```

Get the address of Node 2:

```sh
$ go-filecoin id --repodir=$HOME/.filecoin2
    {
   	"Addresses": [
   		"/ip4/127.0.0.1/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs",
   		"/ip4/172.16.200.201/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs"
   	],
   	"ID": "QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs",
   	"AgentVersion": "",
   	"ProtocolVersion": "",
   	"PublicKey": ""
   }
$ export NODE2_ADDR=/ip4/127.0.0.1/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs    
```

Now connect Node 2 to Node 1 using the address retrieved for Node 1:

```sh
go-filecoin swarm connect $NODE1_ADDR --repodir=$HOME/.filecoin2
```

You should be able to see who connected peers are:

```sh
# Peers of node 1
go-filecoin swarm peers
/ip4/127.0.0.1/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs

# Peers of node 2
# you can also run commands without specifying --repodir if you set FIL_PATH
go-filecoin swarm peers --repodir=$HOME/.filecoin2
/ip4/127.0.0.1/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL
```

#!/bin/sh

for i in `seq 0 1 15`; do
  echo -n "shard$i :" >> /home/ydd/Documents/blockchain_workspace/Ethereum-IPFS/IPFS-Ethereum-Storage/client/shardmap.txt

  ipfs add -q /home/ydd/Documents/blockchain_workspace/Ethereum-IPFS/IPFS-Ethereum-Storage/client/shards/shard_$i.txt >> /home/ydd/Documents/blockchain_workspace/Ethereum-IPFS/IPFS-Ethereum-Storage/client/shardmap.txt

done


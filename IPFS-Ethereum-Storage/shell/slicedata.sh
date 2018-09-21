#!/bin/bash
data=$(cat /home/ydd/Documents/blockchain_workspace/Ethereum-IPFS/IPFS-Ethereum-Storage/client/test16.txt)
length=${#data}
echo $length
length=$((length=length-1))
echo $length
echo $data
i=0
echo $i
for shard in `seq 0 2 $length`; do
  echo -n $i > /home/ydd/Documents/blockchain_workspace/Ethereum-IPFS/IPFS-Ethereum-Storage/client/shards/shard_$i.txt
  echo ${data:$shard:2} >> /home/ydd/Documents/blockchain_workspace/Ethereum-IPFS/IPFS-Ethereum-Storage/client/shards/shard_$i.txt
  let i++
done
 


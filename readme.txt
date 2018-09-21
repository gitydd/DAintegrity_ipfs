一、运行项目

1、启动IPFS服务 
打开终端，任意目录下输入：
ipfs daemon

2、开启Ethereum
(1)进入IPFS-Ethereum目录 ~/Documents/blockchain_workspace/Ethereum-IPFS
(2)命令行输入以下命令进入eth控制台：
geth --datadir="./" --networkid 23422  --rpc --rpccorsdomain="*" --rpcport="8545" --minerthreads="1" --mine --nodiscover --maxpeers=0 --unlock 0 console
(3)输入eth密码: eth2018(通过下面的步骤提前设置好的)

3、第一次启动Ethereum时候需要执行以下操作
在eth控制台下输入：
eth.accounts   //查看账户信息
personal.newAccount("eth2018")   //创建密码为eth2018的新账户

acc0=eth.accounts[0]  
eth.getBalance(eth.accounts[0])  //查询账户0的金额

miner.start()  //开始挖矿
miner.stop()   //停止挖矿

personal.unlockAccount(acc0)  //解锁账户0，需要前面设置的密码，这里为eth2018

eth.getTransaction("0x9919f703060e6402ef211597d487e6ea423577cfe929d4dda52b8f1a9948fe02")  //查看这笔交易,参数为交易的ID

4、在storage.html控制台进行测试，依次输入以下四个函数
//涉及到以太坊的部分都需要开启挖矿，因此第一个和第四个函数运行的时候需要在eth控制台执行miner.start()

deployStorage()
//Deploy the storage contract to your Ethereum blockchain. The geth client will show it received the deployment transaction, return a transaction hash to the console, and print out the contract transaction address after successful deployment.

storeContent("https://ethereum.org/images/wallpaper-homestead.jpg")
//Store the specified URL content to IPFS. The IPFS client will receive the URL content for storage and return an IPFS address that will be provided to the smart contract.
//这一步是将参数链接对应的内容存储到IPFS，可能由于网络问题链接不到。因此可以不执行这一步，通过IPFS上传文件的命令（ipfs add file.txt）将本地文件file.txt存储到IPFS

storeAddress("QmPJLNMiAp3QoCKdGAgzshNRbQiZ8wQmyjYkcUHJZzQ19u")
//Submit a transaction to the Ethereum contract for storage on our blockchain.

fetchContent()
//Gets the last stored IPFS address in the Ethereum contract and queries IPFS for the associated URL.



二、ipfs
//打开任意终端
Ctrl+Alt+t 
(Ctrl+Shift+t 命令是在当前终端开启一个新的终端)

//输入ipfs查看ipfs的相关命令
ipfs

(1)ipfs命令行操作文件的命令：
//IPFS上传文件
ipfs add file.txt
//查看文件内容
ipfs cat hash值 
//同步节点
ipfs daemon
//IPFS新增目录
ipfs add -r 目录名


(2)IPFS存储成功之后的查看方式
//浏览器本地查看
http://localhost:8080/ipfs/QmRtpSu9JkAC52Qaw4BHCttNPfKwmgZ3LRFp5AtqZsjcFn
//IPFS官方提供的浏览器查看（需要翻墙）
https://ipfs.io/ipfs/QmRtpSu9JkAC52Qaw4BHCttNPfKwmgZ3LRFp5AtqZsjcFn
//命令行查看
ipfs cat /ipfs/QmRtpSu9JkAC52Qaw4BHCttNPfKwmgZ3LRFp5AtqZsjcFn


(3)安装ipfs-api
npm install --save ipfs-api



三、脚本
写好脚本之后，运行脚本之前需要设置脚本的权限
//设置脚本运行权限
sudo chmod +x shell2.sh

//运行脚本，进入脚本的目录
./shell.sh






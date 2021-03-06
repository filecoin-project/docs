# venus 分布式矿池常见问题

## venus

### worker fil 不足未及时处理或venus节点出口流量被打满，大量任务卡在WaitSeed

&ensp;&ensp; 在venus-auth节点上使用`./venus-messager msg list-fail`命令打开失败的消息，然后使用`./venus-messager msg mark-bad --really-do-it <失败消息id>`命令将失败的消息打回sealer侧重启判断消息是否有问题；再次检查是否还有失败的消息


### venus节点宕机或磁盘空间将满，切换备机

venus-message: 修改用户家目录下的messager.toml配置文件里的内容,指向新节点后，重启venus-message服务
```
cat ~/messager.toml
[node]
    url = "/ip4/192.168.1.134/tcp/3453"
    token= "eyJhbGciOIUacbciIsInR5cCI6I.iLCJwZXJtIjoic2lnbiIs.c65GtR7IVjJYE"
```
kill掉之前的venus-messager进程后，再重新启动即可

venus-miner: 修改用户家目录下的配置文件，连接的ip地址
```
cat ~/.venusminer/config.toml
ListenAPI = "/ip4/192.168.0.98/tcp/3453/http"
Token = "eyJhbGciOiJIUzIsInR5c.eyJuYW1lIjoibWMmV4dCI6IiJ9.3P0x6StVjJYEhv198"
```
重新启动venus-miner服务

winning-post和sealer节点修改.lotus/api和.lotus/token值
```
cat .venus/api
/ip4/120.78.159.125/tcp/3453/http
```
修改完成后使用重启winning-post和sealer

## venus-messager

### venus-messager 中大量消息卡住

&ensp;&ensp; 默认每个worker地址30秒只往链上发送的消息数最多只有20条，可以根据实际体量进行稍微增加到30条（值越大同一高度往链上发送的消息数就越多，可能造成小部分的SysErrOutOfGas消息）

```sh
./venus-messager address set-sel-msg-num --num 30 <worker 地址>
```

### <span id="signed-failed">venus-message消息签名失败</span>

```bash
ERROR[2021-07-12T16:37:45+8:00] wallet sign failed 65735211-9b4f-447q-9c8f-ad23791c75e fail **could not decrypt key with given password**
```

从日志中发现消息在签名时失败，主要是wallet设置了错误的钱包密码。

```sh
ERROR wallet sign failed 7edd68a5-4a6f-42c1-bded-acfd7d320118 **fail no connect found for account sealer** and from ...
```

主要是wallet没有支持`sealer`这个账户，[解决方案](https://github.com/filecoin-project/venus-sealer/issues/63#issuecomment-880363242)

## venus-miner

## venus-miner无法出块

- 确认venus-miner连接的venus节点同步高度正常，并检查其日志是否正常；
- 在venus-miner节点上logs/venus-miner.log日志信息；使用 ./venus-miner address state 命令确认IsMining为true
```sh
$ ./venus-miner address state
[
    {
         "Addr": "f0xxx",     # 矿工号
         "IsMining": true,    # 是否在挖矿（出块）
         "Err": null          # 是否有报错信息
    }
]
```

## venus-wallet

### venus-wallet启动之后报错

```
ERROR	wallet_event	wallet_event/listenevent.go:192 WalletSign error password not set {"api hub": "/ip4/<IP_ADDRESS>/tcp/45132"}
```

是由于没有执行./venus-wallet set-password命令设置密码导致的，每次venus-wallet重启都需要执行设置密码的操作，也可以在启动时设置密码：`./venus-wallet run --password=<password>`
设置密码后，如果有下列报错，则需要检查配置文件。

```bash
ERROR	wallet_event	wallet_listen/listenevent.go:120 listen wallet event errored: listenWalletRequestOnce listenWalletRequestOnce call failed: handler: websocket connection closed {"api hub": "/ip4/47.251.6.27/tcp/45132"}
```

直到到connect to server返回正确的消息为止。

```bash
INFO	wallet_event	wallet_event/listenevent.go:156 connect to server 65735211-9b4f-447q-9c8f-ad23791c75e {"api hub": "/ip4/47.251.6.27/tcp/45132"}
```

## venus-sealer

### venus-sealer 创建矿工失败

1. 检查 sealer的日志是否有异常
> 日志中会输出创建矿工的消息：Pushed CreateMiner message: 556f3c3b-35cb-40e5-b096-924e33920420

2. 查看消息是否推送到messager
```
./venus-messager msg search --id="9965e5ea-8142-4b61-8312-425d5598092e"

{
        "ID": "9965e5ea-8142-4b61-8312-425d5598092e",
        "SignedCid": null,
        "from": "t3wjbqsk5wvm7troa72xnnzjvxuspvtdemdcetrml3rmq3h4lghhqw5ys42vymitoanacinmkaf5pwf2kfclsa",
        "Height": 0,
        "Receipt": {
                "ExitCode": -1,
                "ReturnValue": "",
                "GasUsed": 0
        },
        "State": "UnFillMsg",
 }
```

:::info
消息各个状态代表的含义：
UnFillMsg：未签名消息
FillMsg：已签名消息
OnChainMsg：已上链消息
FailedMsg：由于各种原因失败的消息
:::

3. 消息已推送到messager，检查消息状态，初始状态是 `UnFillMsg`
* 若消息长时间是`UnFillMsg`状态，查看日志，可能是gas预估失败或者[签名失败](#signed-failed)
* 若消息状态是`FillMsg`，但长时间未上链，先查看messager日志，再检查是否已推送到节点消息池：`./venus mpool pending --from <address>`，若不在消息池，查看节点日志
* 若消息状态是`FailedMsg`，查看失败原因：`./venus-messager msg list-fail --from <address>`

4. 消息未推送到messager，sealer日志会有错误提示

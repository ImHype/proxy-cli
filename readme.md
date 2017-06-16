# proxycli

## How to use ?
### Step 1 - Install
```bash
$ npm i -g proxycli
```

### Step 2 - Configration
```json
{
    "timeout": 3000,
    "locations": [
        {
            "host": "m.kaola.com",
            "upstream": ["http://127.0.0.1:9999"]
        }, {
            "host": "www.kaola.com",
            "upstream": ["http://127.0.0.1:8888"]
        }
    ]
}
```

### Step 3 - Start
```bash
$ proxy # nohup proxy &
```

## Help
```
W
$ proxy -h
Usage: proxy [options]

选项：
  -c, --config    配置文件路径                          [默认值: "proxy.config"]
  -s, --secure    是否启用 https                                 [默认值: false]
  -v, --version   显示版本号                                              [布尔]
  -H, --help, -h  显示帮助信息                                            [布尔]

示例：
  proxy --config ./config.js --secure true


```

## Lincese 
MIT
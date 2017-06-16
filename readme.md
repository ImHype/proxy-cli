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
$ proxcli -h
```

## Lincese 
MIT
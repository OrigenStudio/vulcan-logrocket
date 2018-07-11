# Vulcan Sentry
Sentry integration for VulcanJS

## Set-up

### Install
```
meteor add origenstudio:vulcan-logrocket
```

### Settings

In your app settings.json file add:

```
{
    //...
    "public": {
        //...
        "logRocket": {
            "id": "LOGROCKET_ID"
        }
    }
}

```

### Run your app
You should start seeing sessions on LogRocket's dashboard

## What it does?

This package downloads the LogRocket dependencies from its CDN and initializes it with your setting details.

## TODO
* [ ] Better integration with other error tracking tools e.g. Sentry





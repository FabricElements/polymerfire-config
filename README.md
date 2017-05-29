# polymerfire-config
This component set up the default firebase configuration for your Firebase project.
You no longer need to configure the firebase app manually inside a firebase/polymer project.

## Requirements
You need to deploy your app on `Firebase Hosting`

## How to install
- Install dependencies
```ssh
$ bower i --save firebase/polymerfire
$ bower i --save FabricElements/polymerfire-config
```
- Require the element only one time in your entire project. You can use your `entry point` (index.html) or `app shell` (my-app.html)
```html
<link rel="import" href="/bower_components/polymerfire-config/polymerfire-config.html">
```

## How to use
Use firebase instead of polymer for serving the app
```ssh
$ firebase serve
```
## How to use different configurations
You need to change the current firebase project on you shell like this:
```ssh
$ firebase use [alias_or_project_id]
```
Run the server again and the configuration will take effect.

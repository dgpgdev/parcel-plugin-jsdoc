# parcel-plugin-jsdoc
a very simple plugin to make jsdoc with parcel.js

```bash
npm -i parcel-plugin-jsdoc -D

//or

yarn add parcel-plugin-jsdoc -D
```
 ### First Step
You must install jsdoc
 ```bash
npm -i jsdoc -D
```
 ### Second Step
you must create a jsdoc.json config file (more info about jsdoc config file [jsdoc](http://usejsdoc.org/about-configuring-jsdoc.html) )

```json
//simple file jsdoc.json
{
	"source": {
		"include": [ "src/" ]
	},
	"opts": {
		"destination": "./docs/",
		"recurse": true
	}
}
```

Now you can use this plugin. Just run your parcel command and let'go. After each parcel compilation jsdoc build a new doc for you
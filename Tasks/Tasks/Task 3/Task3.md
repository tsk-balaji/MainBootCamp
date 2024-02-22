This is the consolidated Markdown file created for the Day 3 tasks.

# DAY 3 TASK

> ## 1. Compare Two JSON

Given the objects are:

```js

let obj1 = {name : "Person1", age:5};
let obj2 = {age:5, name:"Person1"};
```


The Code to compare the both objects are :

```js

let objectsAreEqual = true;

if (Object.keys(obj1).length == Object.keys (obj2).length){
    for (let key in obj1 ){
        if (obj1[key] !== obj2[key]){
            objectsAreEqual = false;
            console.log(key + " : doesn't have same value");
        }
    }
}
else{
    objectsAreEqual = false;
    console.log(" Object length are different");
}

if(objectsAreEqual){
    console.log("Objects are Same");
}

```
Output for the given string:

![](https://github.com/tsk-balaji/MainBootCamp/blob/main/Tasks/Tasks/TaskScreenshot/Task3.1.png)






> ## 2.  Display all the countries flag in console.
>
> 
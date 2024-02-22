#Difference between Window and Object in JavaScript.



|  **Document** | **Window** | 
| :----:  | :----:|
|It represents the document loaded inside the window or browser.|It represents the browser window in which you are seeing the content.|
|The properties related to it are stored in the document object.|The properties related to it are stored in the window object.|
|It is loaded after the loading window because the window contains a document.|It is loaded before the document because window container document.|
|It is the root element of the document object model.|The window is the global element for all objects, functions, etc.|
|It is an object of window.|It is an object of the browser.|
|We can not access windows objects properties inside the document.|We can access document object properties inside the window.|
| logically:  document:{ properties} |logically: window:{document:{properties}}|
|Example: document.title will return the title of the document|Example: window.document.title will return the title of the document.|

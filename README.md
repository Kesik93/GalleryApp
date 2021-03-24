# GalleryApp

![website](/screenshots/website.jpg)  
Simple application using Unsplash API.  
If you want to use it, please enter yours access key from [Unsplash](https://unsplash.com/) in constant.js file here
`export const UNSPLASH_ACCESS_KEY = "YOUR ACCESS KEY";`

## Functions and data
* **Search function**  
By default there are random photos. Type what you want and click 'Search'.  
The search result will appear below.  
![Photo tags](/screenshots/searchComponent.jpg)  


* **Infinite scroll function**  
It will be implemented in the future  


* **Search by tags**  
If you like the found photo and you want to see similar ones, click on the tag to see more.  
![Photo tags](/screenshots/photoExampleTags.jpg)  


* **Statistics**  
Each photo has statistics: the number of likes, downloads and views. You can see them easily  
![Photo statistics](/screenshots/photoExampleStats.jpg)  

* **Full screen photo**
Click on the picture to see it in full screen
![Full screen photo](/screenshots/fullScreenPhoto.jpg) 


PS. Demo apps using Unsplash API are limited to 50 requests per hour.  
If you don't need statistics and/or tags, please comment the useEffect method in Photo.js. to use the site longer
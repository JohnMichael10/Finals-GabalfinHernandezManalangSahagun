# Finals-GabalfinHernandezManalangSahagun
RECIPAL

A Project in CS 312: App Development

By:

MANALANG, PROMISE SAM A.
SAHAGUN. AARON JOHN
GABALFIN, JOHN MICHAEL
HERNANDEZ, MARIUS JACOB

CS 3102

December 2023
I. PROJECT OVERVIEW
Provide a concise yet comprehensive summary of your web/mobile app project, including its background, purpose, goals, and key functionalities. Mention the problem your app aims to solve and the value it brings to users.

These days, a lot of people don’t have much time to think about what they eat and how to make what they do want to eat due to personal circumstances and the busyness of everyday life. Recipal is a hybrid application that seeks to provide an answer to the challenges in modern-day meal planning and preparation. Taking into consideration the constraints when it comes to time, budget, skill, and even nutritional and dietary requirements that differ from person to person, Recipal aims to provide users with an accessible and effective way of finding and making their own meals based on their personal parameters. 

Recipal’s goal is to be a companion for anyone’s cooking and dietary needs. It aims to empower users to make informed choices about their everyday meals while taking into account their personal needs, budget, dietary restrictions, as well as time. It also seeks to help users to keep track of and achieve their goals whether it be in terms of nutrition, consistent meal planning, or their body mass index. This application also intends to target several SDGs, one of them being zero hunger as this application will help those who need to budget their meals or create meals with only the ingredients they have available. Another is the no poverty SDG which is applicable due to Recipal being able to take into account users who have limited funds to spend on food while suggesting meals that are cheap yet suit the user. Good health and well being is also included as this app will be able to adjust recommendations on a user to user basis, taking into account their nutritional needs for healthy meal suggestions. Finally, this also targets responsible consumption and production as Recipal will be able to make use of the users ingredients which they may originally end up not using, helping users to efficiently and effectively use their resources without wasting them.

Specifically, this app will provide users with comprehensive assistance for meal planning, cooking guidance, and dietary recommendations. It will also focus on personalization, taking into consideration the user’s preferences, dietary requirements, and budget constraints. Educational support is also a primary goal for the app, focusing on providing users with comprehensive information on the nutritional value and facts that their meal has. Finally, accessibility will also be a focal point, ensuring the app is user-friendly and easily navigable for users of different ages and culinary skills.

Key functionalities of the app include personalized recommendations based on user parameters as well as meal planning that assist users on finding and planning meals based on said parameters. Recipal would also provide the key functionality of providing the data and information about their meals for users to track and know about the nutritional value of their food. There is also the tracking and goals that can be accessed by users so they can see their progress and choose what they aim to achieve be it in their meal planning, nutrition, or their body mass index.

To more easily understand the flow and creation of the project, the following flowchart was created:

Additionally, before starting with any of the coding, the project created a Figma prototype to create a clearer image of the UI and overall design of the Recipal application for better coordination and less hassle down the production line. The following are images from the Figma prototype designs:

II. TARGET USERS
Define and profile your intended users. Explain why these users would benefit from your app. 

Our project aims to target a wide range of users as Recipal is an app that can be beneficial to anyone as long as they have the needed device and internet access, as well as the comprehension to understand the functionality and laid out information in our app. Though, the biggest expected userbase would be around the ages of 15-30, particularly students and people who have jobs that leave little time for food preparation and planning. Recipal would be able to help these users in deciding their meals as well as showing them why their meal would be a wise choice and how it benefits them through the nutritional information the app provides. Our application will be able to adjust to the users budget, ingredients, as well as their specific needs. With food being an integral part of human survival, it’s not a stretch to say that Recipal is an application that can benefit all of its users.

III. FEATURES
List and describe the main features of your app. For each feature, consider adding screenshots for both the web and mobile apps, accompanied by a brief explanation.

Recipal has numerous features and functions that help with the meal planning and nutritional needs of the user, the following is a list of said important functions present in the application:

Login and Sign-up - This feature is pretty much self-explanatory, a login and sign-up system which is something the user will have to fill up first before actually being able to access the site itself. It allows users to create an account for Recipal or put in the info from an already created account.

BMI Calculations - Recipal allows users to input their height and weight and the app will automatically calculate their BMI as well as show them which category they fall into, whether it be normal, underweight, or overweight. Additionally, it’ll also show the optimal weight they should try and target,

Recommend me a Recipe - This feature will allow users to get a personalized meal recipe based on their personal preferences that the app puts into consideration before looking through a list of recipes that fit all the parameters of the user. The recommended meal will have various important information about it such as calorie count and other nutritional facts. This part of the app also shows the myriad of meals found in our database that the user can select to see the ingredients and nutritional facts of the selected meal.

Add a Habit - A feature that simply allows the user to add habits they want to have. This includes habits such as not eating oily foods or eating more fruits to ensure healthier food consumption. This feature is also going to be integrated with another feature so users can keep track of the habits they’ve added for themselves.

Calendar - This feature is the integration of a calendar system into the Recipal app, allowing users to keep track and plan for the many different details pertaining to their meals and consumption. This feature is tied to many other features of the app like the history, habit tracker, and calorie tracker.

History - This keeps track of the user’s meals both those which have been consumed and planned to be consumed. This feature also ties into the calendar of the Recipal app in order to make it easier and more intuitive for the user to plan their meal as well as make the format easier to understand.

Habit Tracker - A feature that keeps track and shows the user the habits they set for themselves. The habit feature also lets the users tick a checkbox so they can update whether they have been succeeding in progressing their set habit. This also ties to the calendar so users can know how long they’ve been keeping track of a habit.

Calorie Tracker - Tracks the calorie intake of the user based on their consumed meals through the app. This feature takes on the appearance of a bar filling up from 0 to 100% to visually relay to the user how much their calorie intake has been, going over 100% would mean reaching calorie levels which may be more detrimental than beneficial to the user.

IV. TECHNOLOGY STACK
List the technologies and tools you used in developing the web and mobile apps, including programming languages, frameworks, and any third-party services or APIs. If you utilized other frameworks or languages, please indicate why you chose them.

There are different frameworks, programming languages, and tools that were used in the development of the Recipal application. The project first and foremost uses Ionic which is an open-source framework for building cross-platform mobile applications or hybrid apps. Ionic was chosen because Recipal’s aim is to be an app that works for both mobile devices and web browsers on other devices, something that Ionic is very much suited for and makes cross-platform compatibility much easier to attain. Ionic is also tied with Angular, a web application framework that makes the manageability and scalability of the project better. Ionic also streamlines the development and prototyping with its command-line interface, allowing for quick progress. 

For languages, TypeScript and JavaScript were used with TypeScript being a superset of JavaScript that adds static typing and other features. These languages were used due to the developers having experience and knowledge in using the said languages, as well as their many different features such as the integration with Ionic framework which was used to build the app itself, as well as widespread compatibility and runtime flexibility which makes the app more accessible as well as makes it easier to implement features that require dynamic behavior. Since these languages are also integrated with Angular which is another framework used, it has the benefit of having component-based architecture which is good for building modular and reusable components. There’s also dependency injection which helps for overall architecture and testing of the program. Additionally, Hypertext Markup Language or HTML is used in the project as it is the standard markup language used for creating the structure and content of webpages with the developers having experience and knowledge in using it. There’s also Cascading Style Sheets or CCS used to create the application. CSS is integral for the styling of Recipal, tying closely together with HTML as it is used for formatting the visual presentation of HTML elements.
	
This project has also implemented the use of Swiper, a framework used for the creation of touch-enabled responsive sliders. Naturally, this would be a great help in creating applications that are used in mobile devices, allowing for touch support for interactivity and accessibility that will make it easier for users to engage with the app. Firebase is also another tool that has been used extensively in the project, used for a lot of the backend involved with the Recipal app such as for the database as well as connecting the many different parts of the application to make it work as intended as well as an integral part of the functionality of the app’s many different features. Firebase is also responsible for the app’s authentication and hosting, handling the account creation for Recipal and the deployment of the application itself. Finally, Recipal utilizes Edamam APIs which are food related-APIs. These APIs are what allows Recipal to work as intended, without it the application wouldn’t be able to pull the necessary information and data it needs for things like the meal searching and recommendations and it also won’t be able to perform the functions such personalized nutrition for users.

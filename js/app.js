/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var ratingOne = document.getElementById("rating1");
ratingOne.innerHTML = "Rating: * * * * *";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var priceTwo = document.getElementById("price2");
priceTwo.innerHTML = "Price: $$$";

var adTwo = document.getElementById("addy2");
adTwo.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var hoursThree = document.createElement("div");
hoursThree.id = "hours3";
hoursThree.innerHTML = "Hours: 6pm - 12am Sun - Sat";

var divThree = document.getElementById("text3");
divThree.appendChild(hoursThree);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/


/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/


/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var divFour = document.getElementById("text4");

var priceFour = document.createElement("div");
priceFour.id = "price4";
priceFour.innerHTML = "Price: $$$";

divFour.appendChild(priceFour);

var addyFour = document.createElement("div");
addyFour.id = "addy4";
addyFour.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";

divFour.appendChild(addyFour);

var hoursFour = document.createElement("div");
hoursFour.id = "hours4";
hoursFour.innerHTML = "Hours: 9am - 10pm Sun - Sat";

divFour.appendChild(hoursFour);

var uFour = document.getElementById("user4");

var comFour = document.createElement("p");
comFour.id = "comment4";
comFour.innerHTML = "I'd leave a blank space for this oxtail soup!";

uFour.appendChild(comFour);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/


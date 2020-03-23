
# Music Promotions | The Monkees 
A front-end website has been created and has been designed to promote the American rock and pop band "The Monkees". Therein, you will find the latest news of a 2021 world tour that includes details of dates, venues and location of the bands’ live performance concerts. For the ultimate fan experience, there is an opportunity to book the band for weddings, anniversaries, birthdays, etc. 
Fans can also access a discography that offers a full list of their albums, selection of audio tracks and playable videos, including the latest ‘Good Times’ album that celebrates the bands' existence over 5 decades.

***

Link to the live website [here](https://spagettileg.github.io/music-promotion-pbf/)

Link to AWS Cloud9 Development [here](https://2e903ebe68914745a80370978dd5ab54.vfs.cloud9.us-east-1.amazonaws.com/_static/index.html)

***

## Table of Contents

1. [UXD Considerations](#uxd-considerations)
    * [User & Business Objectives](#user-&-business-objectives) 

2. [Technologies Applied](#technologies-applied)
    * [Languages](#languages)
    * [Libraries](#libraries)
    * [Tools](#tools)

3. [Features](#features)

4. [Tests](#tests)

5. [Deployment](#deployment)

6. [Credits](#credits)

## UXD Considerations

### User & Business Objectives

#### User
- The user belongs to a community of The Monkees enthusiasts
- Great audio, video and written product offerings made available
- Access to well known material to remind the user of product quality
- Understand the background to The Monkees via all published media types
- Happy to browse audio, video and written material, without obligation to purchase

#### Business
- Promotion of latest recordings to generate customer demand 
- Advanced notice of concert dates to help leverage customer interest. Early bookings is the business objective here 
- Links provided for venues for the user to understand the quality environment to which the concert will be performed 
- Making The Monkees available for private bookings to create an additional revenue stream  
- Social media link access to further promote The Monkees and encourage fan intra-communications

#### Next Stage Generation
- Increase product density through expanding scope of pop memorabilia
- Leverage footfall data to attract commercial online advertising, with resultaqnt revenues used to maintain and grow website
- Affiliate with professional events organisations to encourage new musical talent to feature under the wing of The Monkees
- Explore new social media channels to promote 'The Monkees'

### Wireframes

### User Stories

* Headline news and important updates on concerts to be made readily available
* Information on date of concert, concert venue, ticket prices and door opening time is required
* A picture of the venue togther with access to the venues website will help understand more of what the venue has to offer
* Access to the bands social media sites will be helpful to understand news and views from fellow Monkees fans
* To view a great selection of The Monkees videos and hear to selection of famous audio clips helps create a fantastic frame of mind
* I want to understand the chronology of the The Monkees with the help of a discography
* Information on The Monkees backstory will help users understand where their journey to pop legends started and developed
* A montage of images and quotes would bring the band to life and allow the user to be very much part of The Monkees journey to stardom
* When purchasing a ticket I want to understand the ticket status i.e. available or sold
* I would like the band to be available for private bookings  

### CSS Framework
Bootstrap was the chosen framework for styling my project. I used the Bootstrap grid extensively to support responsiveness on mobile, tablet and desktop devices. 

### Colour Palette
Colours used in this project were sourced [Colour Hunt](https://colorhunt.co/). Essentially, the colours are seeking to capture key attrbutes of The Monkees through energy, intelligence, country rock and psychedelia

Colour         | Hex Code
---------------|----------
Duck Egg Blue  | #587E7F
Custard Yellow | #FBF27C
Sage Green     | #5C835A
Dark Green     | #305C5C
Light Grey     | #CED4DA
Black          | #000
White          | #FFF
Deep Purple    | #850D55
Dark Pink      | #D41E87

### Typography
[Mukta](https://fonts.google.com/) & [Sans Serif](https://fonts.google.com/) fonts were used throughout this project.

### Icon Graphics
Font Awesome 5 icon graphics were used in conjunction with Bootstrap 4, primarily to support information page headers

Page                   | Function                            | Font  
-----------------------|------------------------------------ |-------
index.html             | listen up                           | `fas fa-headphones`
index.html             | tour date for 2021 - title          | `fas fa-broadcast-tower`
index.html             | tour date for 2021 - countries      | `fas fa-ticket-alt`
index.html             | concert ticket - location           | `fas fa-map-marker-alt`    
index.html             | concert ticket - standing price     | `fas fa-hand-holding-usd`
index.html             | concert ticket - seating price      | `fas fa-hand-holding-usd`
index.html             | concert ticket - doors open         | `far fa-clock`
eventsandtickets.html  | booking the monkees - heyhey        | `fas fa-exclamation-triangle`
eventsandtickets.html  | booking the monkees - gigs played   | `fas fa-play`
All pages              | tickets                             | `fas fa-envelope-square`
All pages              | tickets                             | `fas fa-key`
All pages              | bookings                            | `fas fa-user`
All pages              | bookings                            | `fas fa-envelope`
All pages              | bookings                            | `far fa-calendar-alt`

### Navbar design
For tablet and desktop views, the navbar offers 5 functions on show. For mobile devices, all the same options collapse into a 'hamburger' design. 

- Navbar Brand
- Home
- Music
- HeyHey
- Events and Tickets

## Technologies Applied

### Languages
•	[HTML](https://html.spec.whatwg.org/multipage/) used as the markup language

•	[CSS3](https://www.w3.org/Style/CSS/) used to style the HTML

•	[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) used mostly for DOM manipulation

### Libraries
•	[Font Awesome](https://fontawesome.com/) to provide the icon set for Re-Boot website

•	[Google Fonts](https://fonts.google.com/) provided the fonts `Mukta` & `sans-serif` used throughout the project

•	[jQuery](https://jquery.com/) is used to manipulate the DOM, for example buttons, and showing / hiding elements

•	[Bootstrap](https://www.bootstrapcdn.com/) to enable ease of website responsiveness and simplify coding structure

### Tools
•	[AWS Cloud9](https://aws.amazon.com/cloud9/) a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser.

•	[Balsamiq](https://balsamiq.com/) is a small graphical tool to sketch out user interfaces, for websites and web / desktop / mobile applications and used to visualise my project through mock-up design.

•	[Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

•	[GitHub](https://github.com/) is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

•	[Jigsaw - CSS validation](https://jigsaw.w3.org/css-validator/) this validator checks the markup validity of CSS style sheet and ensure coding convention is upheld

•	[JS Hint](https://jshint.com/) a tool that helps to detect errors and potential problems in the javascript code

•	[W3C - HTML validation](https://validator.w3.org/) this validator checks the markup validity of HTML web documents

## Features
### index.html

Navbar (repeated on all pages) has been designed to include a clickable icon image that is synonymous with the bands brand. The user will always return to the home page with. In addition, the navbar allows the user to navigate to ‘music’, ‘heyhey’ and ‘events & tickets’ pages. A ‘hamburger’ design has been built to collapse the navbar for Mobile devices.

A full black and white image of the band is on show from the header through to the first container ‘headline news’. I was inspired by the design as a result of completing the bootstrap training. The thought of scrolling the image creates a sense of something next.   

‘Headline News’ is central to the home page. Users are notified up front of important information concerning the band. Summary news of 2021 world tour is supported by use of icons, sourced from bootstrap / font awesome5.

Further news of a 2021 world tour appears on home page via a ‘bootstrap’ card design. The design has been further modified to include a clickable button to allow user to check availability of tickets via a navigation link through to ‘events & tickets’ page. All buttons are subject to .hover pseudo class that provides a status colour change to the user when their cursor is placed upon the selected button. Furthermore, the user can view the concert venue by clicking on the card image.

Footer (repeated on all pages) includes trading links to tickets and bookings. Social media links and fonts secured from bootstrap / font awesome5. The links are wired to the bands’ respective social media sites. Again, the .hover pseudo class has been used to provide a background colour change (yellow to custom corporate colour) and font colour change too. Site links allow the use to access music, heyhey and events & tickets pages. The lower footing allows for The Monkees performing years, powered by Javascript, copyright and web designer information.    

### music.html
Video downloads of ‘Good Times’, 'The Monkees with Johnny Cash' and 'The Monkees Screen Tests' via you tube has been added at the start of this page. HTML iframe syntax used in conjunction with height & width settings. This approach was a preferred choice compared to an mp4 file that I struggled to work with, mainly due to the 16Mb file size.  The next section of the page is dedicated to the bands’ sample music where the user can access upto 4 music tracks with supporting audio control bars. The sample tracks are aligned to the originating album covers.

A discography completes the last section of the page, built in JS Bootstrap carousel. Both a timeline and corresponding band album covers gives the user a sense of scope and understanding of the music produced by the band. A minimal design was created by removing page indicator numbers and manual controls to ensure automated reviewing of the bands’ 15 images and narrative.

### hey hey!.html
This page is designed to introduce the user to the band members, understand their background and to share some humour with a random selection of quotes.

A full colour image of the band is on show from the header through to the first container ‘background story’. I believe the image shown captures great energy from the band and I wanted this energy to transfer to the user as a means becoming more interested in the page content. The background story provides an insight to how the band came together and notable milestones throughout years of performing.

A carousel is positioned in the last section of this page, offering the user the opportunity to view more images of the band, introduction to band members and share band member quotes too.  The nine image slides are timed to fade (5 seconds) and auto change to the next scheduled slide. 

### Events & Tickets.html
This page is designed to help the user view ticket availability, book tickets and book the band.

Another full colour image of the band is displayed showing a spirit of celebration and precedes the ‘Book Tickets’ section. To book tickets, the user will have been steered from the home page or directly clicked into this web-page. A modal has been added to each concert booking button to help the user by requesting their email and number of tickets required. Password security and a tick box requesting user permission to share their email address provides an essential user assurance.

The user can scroll to end of page to take up an opportunity to book the band for a private event i.e. wedding, anniversary, birthday, etc. A button has been created in conjunction with a modal to help the user complete a booking enquiry form. The form request name, email, preferred booking date, type of event and any special instructions. A tick box has been added to request user permission to share their email address. Again, providing an essential user assurance. No password required here, as we’re dealing with a user booking enquiry and not a formal booking. The latter would represent an additional build in web-design.

### Features left to implement
-	Add conditional formatting to password data entry in modal design
-	Create links from band’s albums in music.html to itunes, serving to increase commercial capability of web-site design 
-	Add television media material in addition to existing video and audio media
-	Add a x4 band member ‘image ribbon’ as part of header that is replicated on all pages and animate via hover.css
-	Build a link for ticket orders and band bookings to a `postgreSQL` database with `Stripe` payment functionality
-	Add a web hit counter to understand popularity of website
-	Create a fans feedback / blog function to help promote continuous improvement of UXD (User Experience Design) for user enjoyment and UCD (User Centred Design) to create great products 

## Tests
A user testing matrix has been produced in MS Excel, but saved as .png to visualize here on GitHub. It outlines the various tests I made to ensure the site renders consistently across different platforms, and that each functionality behaves as intended.

### Compatibility
The following browsers were used in testing the Re-Boot application. Internet Explorer was out of scope for testing due to obsolete capability

platform | version
---------|--------
Chrome   |70.0.3578.98
Edge     |42.17134.1.0
Firefox  |65.0.1
Safari   |12.1.4
Opera    |58.0.3135.65

### Test Observations
-	Responsiveness issues on mobile devices occurred in heyhey.html file for carousel images with varying height. Matter was fixed with support from my mentor
	
    - Added x4 breakpoints (375px, 768px, 1200px & 1415px)
    - Meta tag in header required changing to ensure mobile 1st design was rendered correctly.
  
-   Carousel images on music.html were re-sized 300px x 300px to support a good responsiveness test in mobile view
-   Carousel dot indicators resized to 0.8rem height and width to be responsivenessin mobile view
-   Edge : Emulator tool unreliable, so manual check on responsiveness showed no issues
-   Safari : Background images on index.html, heyhey.html and eventsandtickets.html pages scrolled rather than stay fixed to allow latter containers to scroll over the same images 
-   Opera : Hover functions on buttons does not work (all pages) and click required to find audio bar on video clip (music.html)

## Deployment
This project was developed using the [AWS Cloud9 IDE](https://aws.amazon.com/cloud9/), committed to git and pushed to GitHub using the built in function within cloud9.

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/Spagettileg/music-promotion-pbf), the following steps were taken:

1. Log into GitHub
2. From the list of repositories on the screen, select **Spagettileg/music-promotions-pbf**
3. From the menu items near the top of the page, select **Settings**
4. Scroll down to the **GitHub Pages** section
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website

At the moment of submitting this Milestone project the Development Branch and Master Branch are identical.

### How to run this project locally
To clone this project from GitHub:

1. Follow this link to the [Project GitHub repository](https://github.com/Spagettileg/music-promotion-pbf)
2. Under the repository name, click **"Clone or download"**
3. In the **Clone with HTTPs section**, copy the clone URL for the repository
4. In your local IDE open **Ubuntu Bash**
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type `git clone`, and then paste the URL you copied in Step 3

`git clone https://github.com/USERNAME/REPOSITORY`

7. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from [GitHub](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Credits



##### Colour palette used:
Inspiration of the choice of colours originated from the majority of The Monkees album covers. 


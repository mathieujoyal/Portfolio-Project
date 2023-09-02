# Mathieu's BIG BRAIN moves and thought processes
The story of how this masterpiece came to be.
Here's the link: https://mathieujoyal.netlify.app/

## In the beggining, there was nothing. Then, Greatness manifested.

So I took inspiration from one of the first projects I made with react that I had alot of fun with, the structure revolved around making a fruit shop and since I love apples and have a burning hatred for bananas, I decided that I would try to recreate something similar (in terms of structure of course. I'm unfortunately not sponsored to sell any fruits.)

I used the react features to implement multiple page ( react router, routes, route ) and inserted a header component that would be rendered through the entire website to facilitate navigation.

## I took a break to make it all pretty

After the functionality was spot on, it was time to add some ✨PZAZ✨ to the whole thing. I spent some time deciding the color scheme for the whole thing starting with my header since it will be showing the entire time (which i'm still not too sure about). Then I got to work on some animations for said header to make it less plain and basic.

## 1 week later

FINALLY found my color scheme. I went for a black and green color scheme since I feel like its a pretty good color combo and it matches the stereotypical "coding" colors that you see in the movies.

I had to asdjust most of the styling to make it responsive on EVERY size of screen (within reason). That was challenging especially for the toothpick thin screen that is the commonly found on a ✨GALAXY FOLD✨.
I made sure to use percentages and reasonably small padding/width/margins etc.. to have it always be responsive.

Once that was done, I got to work on the navigation button when the screen is small enough and I decided to make it link to a Full screen naviagtion bar type thing. (it kinda looks like a drop down menu but its a whole new page. Dont tell anyone please)

Then I decided to put some more React on it by using the famous .map method on my project page. It worked flawlessly.

I also took some time to add some animation on most of my page's text and boxes to give it a neon-sign style of animation on startup. Also gave my profile picture a totally rad 360 degree spin and bounce effect.

## Little thought processes

### App

Here is used the Router approach to setup each of my pages and to correctly pass my data component onto my projects page to then use it as a prop. ( more on that later.) I also made it so my header component is outside of the routes but  in the Router to make sure it renders for the user no matter which page they are on.

### Header / navigation page

For this i inserted my Global Style Content with an import and then made it into a "nav bar" and made sure that it was easily usable even on smaller screen using a media css tag. When the screen is smaller than 600 px, the navigation buttons collapse into a burger button that leads to a VERY enlarged navigation bar that fills the screen.

### Global style

I opted to use globalStyle to facilitate my styling across my website. also imported the majority of my animation i made through Styled components and gave them unique classNames / Ids to easily attach them to the desired content. ( i went for a neon look on startup so don,t worry if it flashes a bit, this is intentional.)

### Homepage

A simple little introduction to me and my beautifull mug. I opted to brand myself as a front-end wev developper ( for now ) and to keep it fairly simple for the time being. I do plan on elaborating on pretty much EVERY aspect of my portfolio so this is FAR from the final product.

Agian, used styled componets to make custom animations for my image and text to spin and grow into the screen respectively.

### Secret juju page. (shhhh)

This page i made purely for fun. i love the concept of having little secrets on webpages and i thought i would make a little wink at my grandma that i do love very much. Also styled it a bit more like she would like me to style it.

### About me

a VERY short description of me and my personality. In terms of work and in terms of.. NOT work, it give a little insight of who i am as a person and what my prefferences/hobbies/qualities are.

### Projects

Here is the good stuff. Most of my projects ( in no particular order ) that i felt showcased my talents in a pretty good way. I used a .map method that used my data componet as a prop. In the event that i want to add more projects to my portfolio, i can easily add one to the data componets and it will be automatically rendered correctly on the projects component page.

## to be continued.

This is what I have so far, it technically is ready to submit BUT I have A LOT of idea to add to the site, I just haven't had the time to implement them all but you can rest peacefully knowing that I will make this look better than what it is right now.
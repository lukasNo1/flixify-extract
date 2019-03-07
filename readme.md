#Flixify Extract

This is a Chrome addon to stream series and movies  unlimited, for free on flixify.com (you need to be registered first though)

_Maybe this flaw will get fixed in the future._

##How to activate:
1. Download this repo
2. Goto chrome://extensions in your browser
3. Activate the developer mode
4. Add an "Unpacked extension"
5. Select the repo directory you just downloaded


##How it works:

With a free account you have full access to the complete  library of flixify.

If you want to watch f.ex. a movie you can go to the detail page of the movie. 

If you are a premium user you can now immediately start watching.

If you are a free user, you will get shown a screen that you need to buy premium to watch this.

But this can easily be bypassed.

**Regardless of whether you are a premium or free user, the movie details will get loaded in the background.**

What this addon does is, it injects a javascript file into the site which listens for the movie detail request, catches it, gets the video url and displays it in a new player on the site.


<H1>Snip</H1>
Snip is a ridiculously simple Node module to include client side files into other files (essentially the same as Server Side Includes with Apache). 
There might be, and probably are, other modules which inlcude this functionality and a lot more - but I needed it for some demo code, was curious if 
I could get it to work in a couple hours as an experiment ... so here it is.

To install: fork or download this code and the "require" to the directory.  Or you can <B>npm install snip</B> (this project is also my testing ground 
for NPM modules).

To use:

<OL> 
	<LI> Create a root level directory called "snips". </LI>
	<LI> Place HTML in "snips" you want to include into other pages. </LI>
	<LI> Place comments in the HTML you want to have the snips included in like this:<BR />
		<I>&laquo;!-- snip:html/header.html --!&raquo;</I><BR />
		 While keeping the spacing the same as above, this comment would bring "header.html" from the "html" directory in "snips" to the page. </LI>
</OL>

That's it.  Catch me on twitter @joshbirk if you have any questions.

Todo:

<UL>
	<LI> Make the "snips" directory controlled by environment variables.
	<LI> Make snips multi-level.
</UL>
		
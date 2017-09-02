# market-analysis-app

Bryan Bigej

The Market Anaylsis Voting App

Voters choose their favorite products.

Citations: code for progress bar (some of it has been modified) taken from:
https://www.w3schools.com/howto/howto_js_progressbar.asp


FUNCTIONALITY *****

    *****-Display 3 random images

    *****-Provide instructions to user on what to do

    *****-Click 1 image

    *****-On click, image will log incremental vote 

    *****-Use event listener on each photo to track number of times an individual photo has been clicked; log into console the name of a product selected, and its total votes so far. At same time, display three more random photos

    *****-Put 'See Totals' button on page after user has voted 15 times...that displays listing of all objects and their vote totals on screen. 
    
    *****-Results of survey in list/table format, so user knows which ones were favorites

    *****-user prompted to vote 15 times before stopping the survey and displaying the results (hide images)

    *****-Progress bar

    -user may continue voting, but on next vote hide list votes and only display it again after 15 more votes

    -Visual feedback on choice, so they know actions are being logged

    -3 images different


    -(tip) A single ranker object to manage all the attributes and behaviors around a visitor's product-ranking experience.
    -bug: productNames[0] errors in the recordClick event listener
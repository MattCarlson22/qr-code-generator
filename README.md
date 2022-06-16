# QR-Code-Generator

#### Video Demo: 
https://www.youtube.com/watch?v=v_4n9UeMNYE

#### Description: 
This is a simple webapp that I made for my CS50 final project using the React Framework. It takes in text in a textbox and instantly generates a QR code on the webpage, which can be downloaded as a .png file by clicking the download button. The QR code also changes automatically as you put in text, removing the need for a generate button.
To do this, I had to look into features in React such as useState which allows the state of something to be changed on the fly. I also learned about components, which I used to create both the form the QR code. To get the QR code, I used a library called qrcode.react, which is a component that allows a qr code to be generated in basically one line of code. The last thing that I did was create the ability to download the QR code, which initially did not work. I originally thought you would be able to just right click the image and save-as, but with reactive state, this would not work. Instead what I did was grab the line of text that is used to generate the QR code and generate an image separately, which is then downloaded when the download button is pressed. Overall, I learned a lot about the React framework in doing this project, and I think it was a good start into the world of React.
In this project, As mentioned before, I definitely had to do a lot of research on libraries and where they can be effectively used. Some of these, like qrcode.react which I already mentioned were really helpful. I also used bootstrap for much of the styling, which at first I was struggling with a bit. Honestly I should have just used bootstrap from the beginning because it just made my life a whole lot easier. Another problem with CSS I ran into was trying to resize my canvas of the QR Code. I originally thought it was a CSS thing so I tried what had worked for everything else to no avail. I then looked at bootstrap to see if there were any solutions on there, but also, nothing. Finally, I checked the documentation, and turns out because the QR Code was a canvas, I actually had to change the size inside of the HTML, which suprised me but actually worked.
From this project, if there is anything I have really learned, it's that checking the documentation is the solution to many problems, and just going straight to stack overflow isnt always the solution. I probably spent an hour just trying to resize that QR code, and if I had just looked at documentation, it would have taken me like 5 minutes.
All in all, this was a really fun project, and I look forward to using React more in the future!
const nodemailer = require("../config/nodemailer");

// this is another way of exporting a method
exports.signupWelcome = (newUser) => {
  console.log("inside newComment mailer", newUser);

  let htmlString = nodemailer.renderTemplate(
    { newUser: newUser },
    "/signup/signup_welcome.ejs"
  );
  console.log("htmlString", htmlString);

  nodemailer.transporter.sendMail(
    {
      from: "ankitvis609@gmail.com",
      to: newUser.email,
      subject: "Welcome to Url Shortener",
      // html: htmlString,
      html: `<div width:"500px"; height="700px" display="flex" flex-direction="column" >
                    <h2>Thanks! for Signing Up on Url Shortener</h2>
                    <p>Dear ${newUser.name},</p>
                
                    <P width="90%">A heartfelt welcome to the Url Shortener website! We are thrilled 
                    that you have chosen to be a part of our community. With a commitment to 
                    helping you achieve your goals.</p>
                    
                    <p>
                    Best regards,
                    [Ankit Vishwakarma]
                    PlaceBuddy Team
                    </p>
                </div>`,
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending mail", err);
        return;
      }

      console.log("Message sent", info);
      return;
    }
  );
};

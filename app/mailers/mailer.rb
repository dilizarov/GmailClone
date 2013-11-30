class Mailer < ActionMailer::Base
  default from: "david@app17850547.mailgun.org"

  def user_added
    mail(:to => "dilizarov@gmail.com", :subject => "New friend added")
  end

  def email(recipient, sender, subject, content)
    mail(:to => recipient, :from => sender, :body => content, :content_type => "text/html", :subject => subject)
  end
end

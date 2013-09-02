class Mailer < ActionMailer::Base
  default from: "david@app17850547.mailgun.org"

  def user_added
  mail(:to => "dilizarov@gmail.com", :subject => "New friend added")
  end
end

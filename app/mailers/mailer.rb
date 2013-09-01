class Mailer < ActionMailer::Base
  default from: "from@example.com"

  def user_added
  mail(:to => "dilizarov@gmail.com", :subject => "New friend added")
  end
end

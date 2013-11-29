class User < ActiveRecord::Base
  attr_accessible :email, :password
  attr_reader :password

  has_many :user_folders,
  :class_name => "UserFolder"
  has_many :folder_emails,
  :class_name => "FolderEmail"
  
  has_many :folders, :through => :user_folders, :source => :folder
    
  has_many :sent_emails,
  :class_name => "Email",
  :foreign_key => :sender_address,
  :primary_key => :email
  
  has_many :received_emails,
  :class_name => "Email",
  :foreign_key => :recipient_id

  validates :password_digest, :presence => { :message => "Password can't be blank" }
  validates :password, :length => { :minimum => 6, :allow_nil => true }
  validates :session_token, :presence => true
  validates :email, :presence => true
  validates :email, :uniqueness => true
  validates_format_of :email, :with => /\A(\d|[a-zA-Z])+(\d|[a-zA-Z]|\.)*@gmaily.com/,
  :message => "The first character of your username should be a letter (a-z) or number."

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)

    return nil if user.nil?

    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    loop do
      session_token = SecureRandom::urlsafe_base64(16)
      unless User.find_by_session_token(session_token)
        return session_token
      end
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
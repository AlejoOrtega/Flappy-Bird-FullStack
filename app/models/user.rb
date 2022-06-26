class User < ApplicationRecord
    has_secure_password
    
    has_many :scores, dependent: :delete_all

    validates :username, uniqueness: true
end

class User < ApplicationRecord
  belongs_to :role

  before_validation :assign_default_role, on: :create
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self

  private

  def assign_default_role
    puts "Assigning default role..."  # Log when this method is triggered
    default_role = Role.find_by(name: 'user')
    if default_role
      puts "Default role found: #{default_role.name}"  # Log when a role is found
      self.role = default_role
    else
      puts "Error: Default role not found!"  # Log if no role is found
      raise 'Default role not found. Make sure a role with name "user" exists in the database.'
    end
  end
end

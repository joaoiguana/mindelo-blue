class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :name

  # Serialize the role's name (or any other attribute from the role)
  attribute :role_name do |user|
    user.role.name if user.role
  end
end

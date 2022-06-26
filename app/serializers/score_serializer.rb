class ScoreSerializer < ActiveModel::Serializer
  attributes :username, :score, :created_at

  def username
    object.user.username
  end
end

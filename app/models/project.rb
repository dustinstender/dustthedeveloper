class Project < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 50, maximum: 400 }
  validates :url, presence: true
  has_one_attached :image
end

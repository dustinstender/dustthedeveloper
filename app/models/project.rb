class Project < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 50, maximum: 200 }
  validates :url, presence: true
end

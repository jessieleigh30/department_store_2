class Item < ApplicationRecord
  belongs_to :department
  has_many :reviews
end

class RemoveImageFromProjects < ActiveRecord::Migration[6.1]
  def change
    remove_column :projects, :image, :string
  end
end

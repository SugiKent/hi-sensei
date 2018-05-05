class CreateQuestionContents < ActiveRecord::Migration[5.2]
  def change
    create_table :question_contents do |t|
      t.string :question_id, foreign_key: true
      t.text :title
      t.text :content
      t.integer :content_type

      t.timestamps
    end
  end
end

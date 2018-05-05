class Question < ApplicationRecord
  before_create :set_primary_key
  self.primary_key = "public_id"

  belongs_to :user
  has_many :question_contents
  accepts_nested_attributes_for :question_contents, allow_destroy: true

  def set_primary_key
    ActiveRecord::Base.transaction do
      c = 0
      begin
        # intの最大値2147483647だと9桁がMAX
        # 10桁にするとmysqlがbigintになってしまうので
        n = 9
        pid = format("%0#{n}d", SecureRandom.random_number(10**n))

        self.public_id = pid
        raise 'can not get question' if !self
      rescue => e
        c += 1
        # リトライは4回
        # さすがに9桁のランダム値が4回被ることはないんじゃないかと
        if c < 5
          retry
        else
          raise 'public_id error'
        end
      end
    end
  end

end

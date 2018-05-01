class QuestionsController < SessionsController
  before_action :sign_in_required
  def index
    # ログイン後のスタートページ
  end
end

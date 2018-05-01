class Api::V1::QuestionsController < SessionsController
  # before_action :sign_in_required
  def index
    @questions = current_user.questions
  end
end

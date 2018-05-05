class Api::V1::QuestionsController < SessionsController
  before_action :sign_in_required
  def index
    @questions = current_user.questions
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.create(question: params[:question])
    render json: @question
  end

  def update
    @question = Question.find(params[:id])
    @question.update_attributes(params_question)
    render json: {question: @question}
  end

  private
  def params_question
    params.require(:question).permit(:title)
  end
end

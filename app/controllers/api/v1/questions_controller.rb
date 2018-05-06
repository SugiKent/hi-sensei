class Api::V1::QuestionsController < SessionsController
  before_action :sign_in_required
  def index
    @questions = current_user.questions
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = current_user.questions.create(params_question)
    render json: {question: @question, question_contents: @question.question_contents}
  end

  def update
    @question = Question.find(params[:id])
    @question.update(params_question)
    render json: {question: @question, question_contents: @question.question_contents}
  end

  def toggle_solved
    @question = Question.find(params[:question_id])
    @question.toggle(:solved)

    @questions = current_user.questions
    render :index
  end

  private
  def params_question
    params.require(:question).permit(:title, question_contents_attributes: [:id, :title, :content])
  end
end

class Api::V1::QuestionContentsController < SessionsController
  before_action :sign_in_required

  def destroy
    @question = Question.find(params[:id])
    @content = @question.question_contents[params[:contentIndex].to_i]
    @content.destroy
    render json: {question: @question, question_contents: @question.question_contents}
  end
end

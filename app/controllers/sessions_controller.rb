class SessionsController < ApplicationController
  def create
    user = User.find_or_create_from_auth_hash(request.env['omniauth.auth'])
    session[:user_id] = user.id
    flash[:notice] = "ユーザー認証が完了しました。"
    redirect_to questions_path
  end

  def destroy
    reset_session
    flash[:notice] = "ログアウトしました。"
    redirect_to root_path
  end

  private
  def sign_in_required
    unless logged_in?
      flash[:warning] = "ログインが必要です。"
      redirect_to root_path
    else
      return false
    end
  end

  def already_signed_in
    redirect_to questions_path if logged_in?
  end
end

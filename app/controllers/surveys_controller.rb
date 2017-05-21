class SurveysController < ApplicationController

  def index
  end

  def graph
  end

  def show
    render :thank_you
  end

  def completed
  end

  def edit
    @survey = Survey.find(params[:id])
    if !(@survey.q1.nil?)
      redirect_to '/completed'
    else
    render :form
  end

  def update
    @survey = Survey.find(params[:id])
      @survey.q1 = params[:question_1]
      @survey.q2 = params[:question_2]
      @survey.q3 = params[:question_3]
      if @survey.save
        redirect_to '/thank_you'
      end
    end
  end

  def report
    surveys = Survey.all
    data = {
      :q1 => [],
      :q2 => [],
      :q3 => []
    }

    # question 1
    q1_20under_count = 0
    q1_21to30_count = 0
    q1_31to40_count = 0
    q1_41above_count = 0

    surveys.each do |survey|

      if survey.q1 == '20under'
        q1_20under_count += 1
      elsif survey.q1 == '21to30'
        q1_21to30_count += 1
      elsif survey.q1 == '31to40'
        q1_31to40_count += 1
      elsif survey.q1 == '41above'
        q1_41above_count += 1
      end
    end
    data[:q1][0] = q1_20under_count
    data[:q1][1] = q1_21to30_count
    data[:q1][2] = q1_31to40_count
    data[:q1][3] = q1_41above_count
    data[:q1_sum] = data[:q1].reduce(:+)
    data[:q1_inPercent] = data[:q1].collect{|q| q*100/data[:q1_sum]}


    #question2
    q2_3under_count = 0
    q2_4to7_count = 0
    q2_8above_count = 0

    surveys.each do |survey|
      if survey.q2 == '3under'
        q2_3under_count += 1
      elsif survey.q2 == '4to7'
        q2_4to7_count += 1
      elsif survey.q2 == '8above'
        q2_8above_count += 1
      end
    end
    data[:q2][0] = q2_3under_count
    data[:q2][1] = q2_4to7_count
    data[:q2][2] = q2_8above_count

    # Question 3
    q3_yes_count = 0
    q3_no_count = 0
    surveys.each do |survey|
      if survey.q3 == 'yes'
        q3_yes_count += 1
      elsif survey.q3 == 'no'
        q3_no_count += 1
      end
    end
    data[:q3][0] = q3_yes_count
    data[:q3][1] = q3_no_count

    render json: data
  end

  def create
    survey = Survey.new
    survey.q1 = params[:question_1]
    survey.q2 = params[:question_2]
    survey.q3 = params[:question_3]
    if survey.save
      render :thank_you
    else
      render :index
    end
  end



end

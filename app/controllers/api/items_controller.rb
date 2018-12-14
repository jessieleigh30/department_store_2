class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:update, :destroy, :show]
  before_action :set_department
  
  def index
    render json: @department.items
  end

  def show
    render json: @item #check this out
  end

  def create
    item = @department.item.new(item_params)
    if item.save
      render json: item
    else
      render json: item.errors
    end
  end

  def update
      if @item.update(item_params)
        render json:@item
      else
        render json @item.errors
      end
  end

  def destroy
    @item.destroy
  end

  private

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end

  def set_item
    @item = Item.find(params[:id])
    # @item = Item.find(params[:id]) how it was previously
  end

  def set_department
    @department = Department.find(params[:department_id])
  end



end

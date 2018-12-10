class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:update, :destroy]
  before_action :set_department, only: [:index, :create]
  
  def index
    render json: @department.items.all
  end

  def show
    render json: @item
  end

  def create
    item = @department.items.new(items_params)
    if item.save
      render json: item
    else
      render json: item.errors
    end
  end

  def update
    @item.update(item_params)
    render json: items
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
  end

  def set_department
    @department = Department.find(params[:department_id])
  end



end

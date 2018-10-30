class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { [] }
    @cups[0..5] = place_stones(@cups[0..5])
    @cups[7..-2] = place_stones(@cups[7..12])
  end

  def place_stones(arr)
    arr.each { |el| 4.times { |i| el << :stone } }
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if @cups[start_pos].nil?
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    hand = @cups[start_pos]
    @cups[start_pos] = []

      idx = start_pos
      until hand.empty?
        idx += 1
        idx = 0 if idx > 13

        if idx == 6
          @cups[idx] << hand.pop if current_player_name == @name1
        elsif idx == 13
          @cups[idx] << hand.pop if current_player_name == @name2
        else
          @cups[idx] << hand.pop
        end
      end
      render
      next_turn(idx)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 13 && current_player_name = @name2
      :prompt
    elsif ending_cup_idx == 6 && current_player_name = @name1
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?(&:empty?) || @cups[7..12].all?(&:empty?)
  end

  def winner
    player1 = @cups[6].length
    player2 = @cups[13].length

    if player1 == player2
      :draw
    elsif player1 > player2
      @name1
    else
      @name2
    end
  end

end

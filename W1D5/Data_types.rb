class Stack
  attr_reader :arr
  def initialize
    @arr = []
  end

  def push(el)
    @arr << el
    el
  end

  def pop
    @arr.pop
  end

  def peek
    @arr.last
  end
end

class Queue
  attr_reader :arr
  def initialize
    @arr = []
  end

  def enqueue(el)
    @arr << (el)
    el
  end

  def dequeue
    @arr.shift
  end

  def peek
    @arr.first
  end
end

class Map
  attr_reader :arr
  def initialize
    @arr = []
  end

  def get(key)
    @arr.select { |el| return el[1] if el[0] == key }
    nil
  end

  def delete(key)
    value = get(key)
    @arr.reject! { |el| el[0] == key }
    value
  end
def set(key, value)
  idx = @arr.index { |el| el[0] == key }

  if idx
    @arr[idx][1] == value
  else
    @arr << [key, value]
  end
  value
end

  def show
    @arr
  end
end

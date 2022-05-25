def fibonacci(n):
  if n <2:
     return n

  start = [0,1]

  for i in range(n):
    start.append(start[-1] + start[-2])
    
  return start[n]


print(fibonacci(8))

  # pass



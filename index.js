var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
 function nowServing(next)
  {
    var i = 0
<<<<<<< HEAD
    while (i < next.length)
=======
    while (i < nowServing.length)

    {
      i++;
    }
    
<<<<<<< HEAD
    if (next.length === 0)
=======
    if (katzDeliLine.length === 0)
>>>>>>> 83bfd7345a4e594892ac76ab4af1bf641eb82837
  {
    return "There is nobody waiting to be served!"
  }
  else 
<<<<<<< HEAD
      return 'Currently serving ' + next.shift() + '.'
=======
      return 'Currently serving Steven.'
>>>>>>> 83bfd7345a4e594892ac76ab4af1bf641eb82837

}
function currentLine(queue)
{
  var line = []
  if (queue.length === 0)
  {
    return "The line is currently empty."
  }
  
  else
  {
    var i = 0
    for (i=0; i < queue.length; i++)
    {
      line += (i+1) + ". " + queue[i] + ", "
    }
    
    line = line.slice(0, line.length-2)
    return "The line is currently: " + line
  }
}
tom = [1,4,7,2,4]
jack = [3,4,2,4,4]

tally = [0,0]

for(var i = 0; i < tom.length; i++)
{
    if(tom[i] != jack[i])
    {
        if(tom[i] > jack[i])
        {
            tally[0] += 1;
        }
        else
        {
            tally[1] += 1;
        }
    }
}

console.log(tally)
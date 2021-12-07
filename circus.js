location_possibility = (x1, v1, x2, v2) => {
    possible = "NO"
    while(x2 > x1)
    {
        x1 += v1;
        x2 += v2;
        
        if(x1 == x2)
        {
            possible = "YES"
            break;
        }
    }

    return possible
}

console.log(location_possibility(1,2,2,1))
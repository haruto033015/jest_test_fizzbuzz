export const fizzbuzz = (n: number) :string=> {
    if( n%15 == 0 ){
        return "FizzBuzz";
    }else if( n%3 == 0 ){
        return "Fizz";
    }else if( n%5 == 0 ){
        return "Buzz";
    }
    return String(n);
};

// fizzbuzz(1);
// fizzbuzz(3);
// fizzbuzz(10);
// fizzbuzz(15);
const evenNumber = function(n){
        if(n==1){
            return;
        }
       if(n%2 == 0){
         console.log(n);
       }
    return evenNumber(n-1);

}

evenNumber(10);



var subtractProductAndSum = function(n) {
    let sum=0
    let prp=1
    let s1=n.toString();
    for(let i=0;i<s1.length;i++){
        sum+=parseInt(s1[i]);
        prp*=s1[i];
    }
    return prp-sum
};

function str(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();


    const arr1 = s1.split("");

    for (let i = 0; i < s2.length; i++) {
        if (s2.includes(arr1[i])) {
            arr1.splice(i, 1);
        }else{
            return false;
        }
    }

    if(arr1.length === 0 ){
        return true;
    }else{
        return false;
    }

}
console.log(str("railsaFEty", "fairytAles"));

// railsafety fairytales
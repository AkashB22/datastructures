function reverse(str){
    if(str.length <= 1) return str[0];
    return reverse(str.substring(1)) + str[0];
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
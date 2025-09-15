
// print n to 1 using recursion
function print(num) {
    if (num < 1) return 
    console.log(num)
    num = num - 1
    print(num)
}

print(5)

// print 1 to n using recursion
let n = 5
function print(x) {

    if(x>n) return // agar x >n then stop
    console.log(x)
    x = x+1
    print(x)

}
print(1)
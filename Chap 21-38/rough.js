function longWord(str)
{
    var str1=str.split(" ");
    var arr=new Array();
    for(var i=0; i<str1.length; i++)
    {
        arr[i]=str1[i].length;
    }
    var large=arr[0];
    var counter=0;
    for(var i=1; i<arr.length; i++){
        
        if(arr[i]>large){
            large=arr[i];
            counter=i;
        }
    }

    return counter;
    
}
var s=prompt("Enter String");
var result=longWord(s);
document.write(result);
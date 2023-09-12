function palindrome(str) {
  var target = str.toLowerCase();
  var newStr = "";

  // Modify string
  for (let i = 0; i < target.length; ++i)
  {
    if (target[i] >= 'a' && target[i] <= 'z' || target[i] >= '0' && target[i] <= '9')
      newStr += target[i];
  }
  
  // Check new string
  for (let i = 0, j = newStr.length - 1; i < j; ++i, --j)
  {
    if (newStr[i] != newStr[j])
    {
      console.log(str);
      console.log(newStr);
      return false;
    }
  }
  console.log(str);
  console.log(newStr);
  console.log("-------------");
  return true;
}

palindrome("My age is 0, 0 si ega ym.");
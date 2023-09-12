function setCharAt(str, index, chr) 
{
  if (index > str.length-1) 
    return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function rot13(str) {
  var str2 = str;
  for (let i = 0; i < str2.length; ++i)
  {
    if (str2[i] >= 'A' && str2[i] <= 'Z')
    {
      var code = str2.charCodeAt(i) - 13;
      if (code < 'A'.codePointAt())
      {
        code = 'Z'.codePointAt() + code - 'A'.codePointAt() + 1;
      }
      var chr = String.fromCharCode(code);
      console.log(chr);
      str2 = setCharAt(str2, i, chr);
    }
  }
  return str2;
}

rot13("SERR PBQR PNZC");
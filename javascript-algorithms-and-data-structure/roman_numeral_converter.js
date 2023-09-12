function convertToRoman(num) {
    var result = "";
    var cur = num;
    while (cur > 0)
    {
      if (Math.floor(cur / 1000) != 0)
      {
        result += "M";
        cur -= 1000;
      }
      else if (Math.floor(cur / 900) != 0)
      {
        result += "CM";
        cur -= 900;
      }
      else if (Math.floor(cur / 500) != 0)
      {
        result += "D";
        cur -= 500;
      }
      else if (Math.floor(cur / 400) != 0)
      {
        result += "CD";
        cur -= 400;
      }
      else if (Math.floor(cur / 100) != 0)
      {
        result += "C";
        cur -= 100;
      }
      else if (Math.floor(cur / 90) != 0)
      {
        result += "XC";
        cur -= 90;
      }
      else if (Math.floor(cur / 50) != 0)
      {
        result += "L";
        cur -= 50;
      }
      else if (Math.floor(cur / 40) != 0)
      {
        result += "XL";
        cur -= 40;
      }
      else if (Math.floor(cur / 10) != 0)
      {
        result += "X";
        cur -= 10;
      }
      else if (Math.floor(cur / 9) != 0)
      {
        result += "IX";
        cur -= 9;
      }
      else if (Math.floor(cur / 5) != 0)
      {
        result += "V";
        cur -= 5;
      }
      else if (Math.floor(cur / 4) != 0)
      {
        result += "IV";
        cur -= 4;
      }
      else
      {
        result += "I";
        --cur;
      }
    }
    console.log(result);
    console.log(cur);
    return result;
  }
  
  convertToRoman(36);
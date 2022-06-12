export class maktabati {
  static convertToStr(num) {
    return num + "";
  }

  static toDownNumber(num) {
    let a = this.convertToStr(num);
    let result = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i] == ".") {
        break;
      }
      result += a[i];
    }
    return +result;
  }

  static toUpNumber(num) {
    let a = this.convertToStr(num);
    let result = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i] == ".") {
        break;
      }
      result += a[i];
    }
    return +result + 1;
  }

  static toRoundNumber(num) {
    let a = this.convertToStr(num);
    for (let i = 0; i < a.length; i++) {
      if (a[i] == ".") {
        if (+a[i + 1] >= 5) {
          return this.toUpNumber(num) ;
        }
        else {
          return +this.numbersAfter(num - 1) ;
        }
      } 
    }
  }

  static numbersAfter(num, after = false) {
    let a = this.convertToStr(num);
    let counter = 0;
    let result = "";
    if (after) {
      for (let i = 0; i < a.length; i++) {
        result += a[i];
        if (a[i] === ".") {
          while (counter < after) {
            counter++;
            if (a[i + counter] === undefined) {
              result += "0";
            } else {
              result += a[i + counter];
            }
          }
        }
        if (counter === after) {
          break;
        }
      }
      return result;
    } else {
      return this.toUpNumber(num) + "";
    }
  }

  static getSum(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }

  static getAvg(...nums) {
    return this.getSum(...nums) / nums.length;
  }

  static tryToFind(arr, item) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        result = i;
      }
    }
    if (result != "") {
      return +result ;
    } else {
      return -1 ;
    }
  }

  static getDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  }

  static isPrimary(num) {
    return this.getDivisors(num).length === 2 ? true : false;
  }

  static absolute(num) {
    return num < 0 ? -num : num;
  }

  static square(num) {
    return num ** 0.5;
  }

  static expo(num, pow) {
    return num ** pow;
  }

  static isDivisor(num1, num2) {
    return num1 % num2 === 0 ? true : false;
  }

}

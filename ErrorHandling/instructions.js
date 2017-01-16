// Troubleshooting in JS

// There are 16 errors in the main.js file.

// Find them and fix them using the console log, google, and the following information:

// 1) The page should load showing a button
// 2) Clicking the button should make bubbles appear and go up the page in different directions at different speeds
// 3) Clicking the button should also show text
// 4) This assignment will also test your ability to notice things that don't belong by piecing
//   together what someone else's code does... (ooooo mysterious!)

// Extra Credit – If you can tell me WHY the console log causes issues AND the term
//   we use to refer to the concept behind this issue, I’ll give you +5 points to
//   your grade on this assignment.
// Extra Credit – IF you’ve found all 16 issues and solved them, add the line for Strict Mode
//   to the top of your file. If you can tell me WHY you get the response you do
//   just by adding that line, AND why it wasn’t that way before that line was added,
//   I’ll give you +5 points to your grade on this assignment. (Hint: google it ;-) )



// Researching in JS
// Answer each of the following in the area provided BELOW the questions (for ease of reading)
// 1)	Research how to shuffle the letters in a word so that it’s randomly done each
//     time it’s run. Copy/Paste the code you find and a link to the page where you found it.
// 2)	This is a common JS test, but I’m not going to tell you the name. I will give you
//     the test, and you should do the following:
//         a.	Tell me the name of the test.
//         b.	Give me the most efficient answer you can.
//         c.	Link me to where you found your answer. (There are entire pages devoted to
//             solving this test as efficiently as possible.

//     The Test Question: Write a program that prints the numbers from 1 to 100.
//     But for multiples of 7 print "Pop" instead of the number and for the multiples
//     of 11 print "Whack". For numbers which are multiples of both 7 and 11 print
//     "PopWhack".
// 3)  Research code to validate an email address. Copy/Paste the code you find, the name of
//     the process used to validate it, and a link to where you found your answer.
// 4)  Find the Browser Compatibility Information for the Window''s Outer Width method from mozilla.
//     List it below and a link to the page where you found.



// ANSWERS
// 1) Shuffle
//     Code:
//     String.prototype.shuffle = function () {
//     var a = this.split(""),
//         n = a.length;

//     for(var i = n - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join("");
//     }
//     console.log("the quick brown fox jumps over the lazy dog".shuffle());
//     //-> "veolrm  hth  ke opynug tusbxq ocrad ofeizwj"

//     console.log("the quick brown fox jumps over the lazy dog".shuffle());
//     //-> "o dt hutpe u iqrxj  yaenbwoolhsvmkcger ozf "

//     //Link: http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
// 2) Common Test
//     Name: regExp, probably, but that's not what I landed on
//     Code: 
//  

    var str = [];
    var makeString = function () {
      for (i=0; i<100; i++) {
        var n = i + 1;
        str.push(n);
      }
    }
    makeString();

    var replaceMultiple = function(array, number, string) {
      var division;
    // access each number in an array
        while (i < array.length) {
          i++;
          var divison = array[i]/number;
    // test if that number is an integer
          var testInteger = function () {
            var result = division/number;
            if (Number.isInteger(number)===true) {
              return true;
            }
          }

          if (testInteger()===true) {
            array.splice(i, 0, string);
          }
        };

      replaceMultiple(str, 7, "Pop");
      replaceMultiple(str, 11, "Whack");
      replaceMultiple(str, 77, "PopWhack");
    // for integer === true, splice
    
   

    // I basically have no idea what I'm doing, but when I googled around for the regex solution it seemed like regexes over 5 would crash a browser, so I thought I'd try this. Input an array, test if each item divided by a given number yields an integer. If it yields an integer, then it's a multiple. If it is a multiple, replace. 

    // Link: http://stackoverflow.com/questions/32030727/replace-every-nth-character-from-a-string
    // also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    // also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // also https://www.quaxio.com/triple/
    // for integer test: http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
    // 
// 3) Email Validation
//     Code: 
//   var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// function emailCheck(value, expectedValue, expectedMismatch, multiple)
// {
//     var i = document.createElement('input');
//     var i2 = document.createElement('input');

//     i.type = 'email';
//     i.value = i2.value = value;
//     i.multiple = !!multiple;
//     var mismatch = i.validity.typeMismatch;
//     var mismatchPass = mismatch == expectedMismatch;
//     var sanitizePass = i.value == expectedValue;
//     var mismatchResult = '"' + value + '" is a ' + (mismatch ? 'invalid' : 'valid') + ' email address' + (multiple ? ' list. ' : '. ');
//     var sanitizeResult = 'It was sanitized to "' + i.value + '"' + (sanitizePass ? '.' : ', but should be sanitized to "' + expectedValue + '"');
//     var result = mismatchResult
//     if (value != expectedValue || !sanitizePass)
//         result += sanitizeResult

//     i2.className = EMAIL_REGEX.test(expectedValue) !== expectedMismatch ? 'valid' : 'invalid'
    
//     if (mismatchPass){
//           i.className = 'valid'
//     } else {
//           i.className = 'invalid'
//     }
//     browser.appendChild(i)
//     regex.appendChild(i2)
// }

// function debug(txt){
//     var h3 = document.createElement('h3')
//     var pBrowser = document.createElement('p')
//     var pRegex = document.createElement('p')
//     h3.innerText = txt
//     pBrowser.innerText = "Your browser"
//     pRegex.innerText = "Your regex"
    
//     browser = document.createElement('div')
//     regex = document.createElement('div')
    
//     document.body.appendChild(h3)
//     browser.appendChild(pBrowser)
//     document.body.appendChild(browser)
//     regex.appendChild(pRegex)
//     document.body.appendChild(regex)
// }

// var browser
// var regex
// var expectValid = false;
// var expectInvalid = true;
// var multiple = true;

//     Link: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
// 4) Window Outer Width
//     Info: https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#compat-desktop (Links directly to the table)

//     Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth (links to the whole page)

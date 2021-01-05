var assert = require('assert');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
const { execPath, hasUncaughtExceptionCaptureCallback } = require('process');
var palindrome = require("../Palindrome");
describe('Check if the string is Palindrome', function () {
    
        it('should return true when the string is palindrome', function () {
            let response = palindrome.isPalindrome("nitin");
            expect(response).to.equal(true);
            //console.log(response);
            
        });

        it('should return false when the string is palindrome', function () {
            let response = palindrome.isPalindrome("Nipni");
            expect(response).to.equal(false);
           // console.log(response);
            
        });

});
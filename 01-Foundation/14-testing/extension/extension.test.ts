'use strict';

import test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 1 and 5 is 6', function (t: any): any {
    t.equal(add(1, 5), 6);
    t.end();
  });
  
test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: second', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
    t.equal(maxOfThree(3, 6, 5), 6);
    t.end();
  });
  
test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: four', function (t: any): any {
    t.equal(median([7, 4, 3, 5]), 4.5);
    t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('median: five v2', function (t: any): any {
    t.equal(median([1, 2, 5, 4, 5]), 4);
    t.end();
  });
  
test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('is vowel: ü', function (t: any): any {
    t.ok(isVowel('ü'));
    t.end();
});

test('is vowel: Ü', function (t: any): any {
    t.ok(isVowel('Ü'));
    t.end();
});

test('is vowel: k', function(t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: leereszt', function (t: any): any {
    t.equal(translate('leereszt'), 'leveevereveszt');
    t.end();
});

test('translate: üdÜlő', function (t: any): any {
    t.equal(translate('üdÜlő'), 'üvüdÜVÜlővő');
    t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});
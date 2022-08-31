/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for 
Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

https://www.codewars.com/kata/554e4a2f232cdd87d9000038
*/

function DNAStrand(dna) {

  dna = dna.toUpperCase().split('');

  for (var i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'T': dna[i] = 'A'; break;
      case 'A': dna[i] = 'T'; break;
      case 'C': dna[i] = 'G'; break;
      case 'G': dna[i] = 'C'; break;
    }
  }

  return dna.join('');
}
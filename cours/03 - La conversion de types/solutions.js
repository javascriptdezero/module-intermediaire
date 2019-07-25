// En commentaire, vous trouverez les valeurs auxquelles seront évaluées les
// expressions JavaScript ci-dessous !

!chaine                 // false
!!!!vrai                // true
!!!nombre               // false
chaine + !nombre        // "chainefalse"
vrai + nombre           // 43
3 * vrai + nombre - 2   // 43
vrai + faux             // 1
12 / "6"                // 2
12 / "6" + indefini     // NaN
chaine + 15 + 3         // chaine153
15 + 3 + chaine         // 18chaine
"" * 2 + 42             // 42

// Un peu plus difficile...
12 / ("6" + indefini)   // NaN
12 / nul                // Infinity
"foo" + + "bar"         // fooNaN
nombre +++ chaine       // 42chaine
chaine +++ nombre       // NaN
!!"false" === !!"true"  // true
nul + 1                 // 1
--nombre + "5"          // 415
(--nombre + "5") * ""   // 0
(--nombre + "5") * vrai // 415
--nombre+ + "5"         // 46
3 > 2 > 1               // false
1 + - + 1               // 0
1 + - + - + 1           // 2
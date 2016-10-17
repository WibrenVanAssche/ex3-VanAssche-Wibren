
Opsplitsen html en js code

hoe data versturen naar 'server'? 
http://stackoverflow.com/questions/15568851/node-js-how-to-send-data-from-html-to-express

form post rond table zetten in html file

ik heb op internet gezocht hoe ik al mijn js funties kan laten functioneren 'server side' wanneer en bij de client op een knop wordt gedrukt
==> niets gevonden waar ik iets mee kan doen

niemand in de klas lijkt te weten wat we moeten doen en hoe we moeten beginnen aan het maken van een API

ALLES VERWIJDERD, opnieuw beginnen

in les veel minder uitgebreid gezien

denk dat het de bedoeling is om een url te kunnen maken waar bv in staat calc/2+4
en dat deze dan 6 teruggeeft?
niet zeker.


idee
/calc url aanmaken waar je via postman in bv het veld 'opdracht' 
een rekensom kan ingeven.
het veld uitkomst laten berekenen wat dit moet zijn

ander idee van deze site :
http://stackoverflow.com/questions/8275209/how-can-i-create-a-restful-calculator

was hier al eerder op gekomen maar wist niet hoe te gebruiken.

miss kan ik een url maken vb localhost:4567/calc die me dan een simpele html laat zien
waar ik een opdracht intyp

deze wordt dan verstuurd naar de api en uitgerekend en dan terug gestuurd naar 
de pagina



TOCH ANDERS

23:24 ==> eindelijk werkend iets

html pagina voor inputs
deze stuurt input door naar js file die berekend
=> nu manier zoeken om antwoord fatsoenlijk weer te geven... lukt niet

0:02 ==> nog steeds geen manier gevonden om de output op een 'schermpje'
te krijgen op de originele pagina


0:16 ==> genoeg gepruts voor 1 dag


---------------------------------------------------------

vb:

localhost:4567/som

hier de getallen naar posten (postman) en deze dan posten naar js
hier dan berekening mee doen en terug sturen (eerder idde dat ik had).
maakt wel nog steeds gebruik van de eval funtie. sigurd heeft alternatief genoemd in het
'math' package maar dit lijk me op hetzelfde neer te komen.


11:50

2de methode met behulp van sigurd is wat ik eerder al wou doen,
naar localhost:4567/som/*berekening* gaan en dan geeft hij 
het antwoord weer


19:25

heb geprobeerd om index.html te laten navigeren naar een de url om 
een oplossing weer te geven maar weet niet hoe ik om een 'post' kan vragen zonder
de code gewoon te hertyppen in mijn html of weer hetzelfde te doen als in mijn eerste probeersel

Jonas lijkt een oplossing te hebben gevonden maar deze ligt ver buiten de scope 
van de vorige les en mijn kunnen. 




# avatar-basics
En övning i att jobba med GIT och Github, lämplig för två personer.
## Varför?
För att GIT och Github är ett av utvecklarens viktigaste och mest använda verktyg.
## Hur?
Arbeta två och två. Bestäm vem som skapar repot på Github. Jobba med **issues** och **pull requests**
## Vad?
Skapa tillsammans en webbplats som hanterar avatarer. En avatar har egenskaperna name, age, type och image.
Er kod ska klara av:
* att vid start skapa 5 avatarer
* att sortera avatarerna efter ålder
* att rendera (rita upp) alla avatarer
* att skapa nya avatarer via ett formulär
* att rendera (rita ut) bara en viss typ av avatarer (exempelvis enbart male)
Ni ska dessutom använda en modul för era avatarfunktioner.

## Starta
Den som skapat repot skapar där också en README.md. Skapa sedan en issue för att skapa webbsidan, och en för en constructor-funktion.
Klona sedan repot (båda gör det.)
Därefter skapar ni lokalt varsin branch, som heter något i stil med det som ska göras. 
Lämpligen skriver sedan en av er ihop webbsidan, medan den andra skapar en constructor-funktion för avatarerna. När ni är klara att ladda upp era ändringar gör ni följande:

1. git add (den eller de filer som ska ingå)
2. git commit -m “Meddelande
> relates # NUMMER PÅ ISSUEN”
3. git checkout master  
4. git pull origin master (Eftersom du vill ha ner eventuella ändringar gjorda under tiden du arbetat) 
5. git checkout DIN-BRANCH
6. git push origin DIN-BRANCH
7. Gå till repot och skapa en pull request. Ange i denna att den andre ska vara asignee för att den ska godkänna requesten och merga den.
### Fler issues
* Skapa CSS
* Rendera avatarer med DOM
* Skapa 5 avatarer
* Skapa formulär
* Skapa avatar utifrån data i formuläret
* Enbart visa avatarer av en viss typ
### Resurser 
https://avatars.dicebear.com/

https://github.com/foundersandcoders/git-workflow-workshop-for-two 

#### Avatarbilderna (och deras motsvarande url) kan se ut så här:

https://avatars.dicebear.com/v2/gridy/hans-andersson.svg

https://avatars.dicebear.com/v2/male/hans.svg

https://avatars.dicebear.com/v2/female/1243433434243234hans.svg

https://avatars.dicebear.com/v2/bottts/54-hans.svg

https://avatars.dicebear.com/v2/avataaars/hans-the-great.svg

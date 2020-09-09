https://agile-river-66839.herokuapp.com/

Yrittäessäni "heroku create":n jälkeen "git push heroku master" -komentoa vastaan tuli seuraavanlainen virheilmoitus:
fatal: 'heroku' does not appear to be a git repository
fatal: Could not read from remote repository.

Etsittyäni ratkaisua päätin yrittää seuraavaa komento sarjaa.

git init
git add .
git commit -m "first commit"

Tämän jälkeen sain sovelluksen herokuun.

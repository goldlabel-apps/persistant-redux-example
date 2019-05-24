# Git Fundamentals

[![Rexlabs](./img/rex/rex_ribbon_logo_black.png)](./rexlabs/index.md)  

Quick & easy cut & paste friendly cheat sheet for useful Git terminal commands.

### Conventional Commits
[conventionalcommits.org](https://www.conventionalcommits.org) are a way of 
standardising commit messages to make them more useful. They can be linted 
and thus developers are forced to crete messages which can be read and 
incorporated into a meaningful change log. It also stops developers having 
to use precious brain power thinking up new messages.

Example: 
```
git commit -m 'feat(react): allow provided config object to extend other configs'
```



### Clone a repo
```
git clone https://github.com/rexlabsio/rex-app.git <optional-new-name>
```

### Create new branch
```
git checkout -b feature/<clubhouse-id>/<describe-you-branch>
```

### Checkout previous branch
```
git checkout -
```

### Stage all changes
```
git add .
```
// ## Fonctions d'ordre supérieur

// La currification est un classique de la programmation
// fonctionnelle.  **Écrivez** la fonction `curry2` qui transforme une
// fonction de deux arguments en une fonction d'un argument qui attend
// le second avant de s'exécuter.
//
// (a x b -> c) -> (a -> b -> c)
function curry2(f) {
    return a => b => f(a, b)
}

const res = curry2((a, b) => a + b)(1)(2)

// Son complémentaire est la fonction `uncurry2`.  **Écrivez-la**.
//
// (a -> b -> c) -> (a x b -> c)
function uncurry2(f) {
    return (a, b) => f(a, b)
}

const res1 = uncurry2((a, b) => a + b)(1, 2)

// ## Collections

// Il est courant de vouloir itérer sur des collections (objets ou
// tableaux).  Écrire des `for` ou des `while` devient rapidement
// fastidieux.  Les fonctions de cet exercice allègeront nos
// souffrances.

// La fonction `map` applique son argument `fn` à tous les éléments
// d'un tableau.  **Écrivez-la**.  **Essayez** de passer une chaîne de
// caractères au lieu d'un tableau.  Que se passe-t-il ?
function map(fn, col) {
  var result = [];
  
  for(var i=0; i<col.length; i++) {
    result.push(fn(col[i]))
  }
  
  return result;
}

var testMap1 = map(function(n) { return n + n; }, [1,2,3]);
var testMap2 = map(function(n) { return n + n; }, '123');

// La fonction `filter` filter les éléments d'un tableau suivant un
// prédicat (une fonction qui retourne un booléen).  **Écrivez** cette
// fonction.  **Testez-la** avec un tableau, puis une chaîne.
function filter(pred, col) {
  var result = [];
  
  for(var i=0; i<col.length; i++) {
    if (pred(col[i])) {
      result.push(col[i])
    }
  }
  
  return result;
}

var testFilter = filter(function(n) { return n % 2 === 0; }, [1,2,3]);

// La fonction `find` renvoie le premier élément du tableau qui
// satisfait le prédicat.  Si aucun élément ne satisfait le prédicat,
// la fonction renvoie `undefined`.  **Écrivez-la**.
function find(pred, col) {  
  var result = [];
  
  for(var i=0; i<col.length; i++) {
    if (pred(col[i])) {
      result.push(col[i])
    }
  }
  
  return result;
}

var testFind = find(function(n) { return n > 2 === 0; }, [1,2,3,4]);
var testFind2 = find(function(n) { return n > 2 }, [1,2,3,4]);

// La fonction `pluck` récupère la valeur de la propriété `prop` pour
// tous les éléments d'un tableau.
function pluck(prop, col) {
  var result = []
  for(var i=0; i<col.length; i++) {
    if (col[i].hasOwnProperty(prop)) {
      result.push(col[i][prop])
    }
  }

  return result
}

var books = [
  { title: 'Functional JavaScript', author: 'Michael Fogus' },
  { title: 'Effective JavaScript', author: 'David Herman' },
];

var testPluck = pluck('author', books);
var testPluck2 = pluck('length', ['123', '4567']);

var end = null

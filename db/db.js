const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 8888,
        user: 'docker',
        password: 'docker',
        database: 'postgres'
    }
});


/*
tricks:
C create trick
R show tricks
U trick aanpassen
D delete tricks
ex: tricks{
    trick1{
        name: varialHeelflip
        difficulty: int heelflip, frontside shuvit
    },
    trick2{
        name: kickflip
        conponents: kickflip
    },
    trick3{
       {
        name: treflipRevert
        conponents: 360shuvit, kickflip, revert
        }
    }
}

skaters:
C skater maken  
R skaters + tricks tonen
U trick aan skater toevoegen ( of skater toevoegen)
D skater verwijderen

ex skaters{
    skater1{
        name: tony hawk
        tricks: kickflip
    },
    skater2{
        name: mark suicu
        Tricks: varial heel, kickflip, treflipRevert
    }
}

*/
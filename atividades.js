// Cria let inventarioAlpha e let inventarioBeta
let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

// 01
// removendo o ultimo item do inventarioAlpha
let itemRemovido = inventarioAlpha.pop();

console.table(inventarioAlpha);  

console.log("Item removido: ", itemRemovido);

  
// 02
// removendo o ultimo item do inventarioBeta
itemRemovido = inventarioBeta.pop();

console.table(inventarioBeta);  

console.log("Item removido: ", itemRemovido);


// 03
// adicionando novos artefatos

inventarioAlpha.push(["Artefato 1", "senai", 23456]);
inventarioAlpha.push(["Artefato 2", "valinhos", 25567]);
inventarioAlpha.push(["Artefato 3", "sesi", 793457]);

console.table(inventarioAlpha);


// 04
// adicionando novos artefatos

inventarioBeta.push(["Artefato 1", "senai", 239756]);
inventarioBeta.push(["Artefato 2", "valinhos", 25638567]);

console.table(inventarioBeta);


// 05
//Destaca um item no inicio 
let itemDestacado = inventarioAlpha[4];
inventarioAlpha.unshift(itemDestacado);

console.table(inventarioAlpha);

// Removendo elemento 
inventarioAlpha.splice(5, 1);

console.log(inventarioAlpha);


// 06
//Destaca um item no inicio 
itemDestacado = inventarioBeta[8];
inventarioBeta.unshift(itemDestacado);

console.table(inventarioBeta);

// Removendo elemento 
inventarioBeta.splice(9, 1);

console.log(inventarioBeta);


// 07
// Removendo o primeiro item
itemRemovido = inventarioAlpha.shift();

console.table(inventarioAlpha);

console.log("itemRemovido: ", itemRemovido);


// 08
// Removendo o primeiro item
itemRemovido = inventarioBeta.shift();

console.table(inventarioBeta);

console.log("itemRemovido: ", itemRemovido);


// 09
// Verificando se a “Relíquia de Zordon” está presente no inventário Beta
console.log(`O inventario inclui 'Relíquia de Zordon'? ${inventarioBeta.includes("Relíquia de Zordon")} `);


// 10
// Verificando se a “Nanofibra Luminosa” está presente no inventário Alpha
console.log(`O inventario inclui 'Nanofibra Luminosa'? ${inventarioBeta.includes("Nanofibra Luminosa")} `);

// 12
// Separando os 10 primeiros itens da lista por ponto e virgula
console.log("Os 10 primeiros itens da lista separados por ponto e virgula:", inventarioBeta.slice(0, 10).join("; "));


// 13
// Separando os 5 primeiros itens da lista
console.log("Os 10 primeiros itens da lista separados:", inventarioBeta.slice(0, 5))


// 14
// Separando os 10 ultimos itens da lista
console.log("Os 10 ultimos itens da lista separados:", inventarioAlpha.slice(15, 25))


// 15
// Substituindo item no array
inventarioAlpha[5] = (["Núcleo de Plasma", "Kepler-452b", 9100]);

console.table(inventarioAlpha);


// 16
// Removendo 2 itens a partir do indice 2
itemRemovido = inventarioBeta.splice(2, 2);
console.table(inventarioBeta);

console.log("dois itens no meio do inventario beta removidos:");
console.table(inventarioBeta);

console.log(itemRemovido);

// 17
// Combinando os inventarios
console.log("inventarios combinados:", inventarioAlpha.concat(inventarioBeta));
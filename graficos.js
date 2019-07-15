function desenharGraficos(){

    //GRAFICO DE PIZZA
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addRows([
        ['Educação',2000],
        ['Transporte',500],
        ['Lazer',230],
        ['Saúde', 50],
        ['Cartão de crédito',900],
        ['Alimentação',260]
    ]);
    
    var opcoes = {
        title:'Tipos de Gastos',
        height:400,
        width:800,
        //'pieHole':0.4 //grafico tipo donut
        is3D: true,
        legend: 'labeled',
        pieSliceText:'value',
        //colors:['grey','red','yellow','blue','pink','purple']
        slices: {
            1:{color:'grey'},
            2:{color:'#A6A6A6'},
            3:{color:'grey'},
            4:{offset: 0.4},
            5:{color:'grey'}
        }
    };

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela, opcoes);




    //GRAFICO DE LINHA
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Mês');
    tabela.addColumn('number', 'Gastos');
    tabela.addRows([
        ['Jan',800],
        ['Fev',400],
        ['Mar',1100],
        ['Abr',400],
        ['Mai',500],
        ['Jun',750],
        ['Jul',1500],
        ['Ago',650],
        ['Set',850],
        ['Out',400],
        ['Nov',1000],
        ['Dez',720]
    ]);
    
    var opcoes = {
        title:'Gastos por Mês',
        height:300,
        width:650,
        vAxis:{
            format: 'currency', 
            gridlines:{
                count: 4, 
                color:'transparent'
            }
        },
        curveType: 'function',
        legend:'none'
    };

    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
    grafico.draw(tabela, opcoes);




    //GRAFICO DE BARRAS
    var tabela = google.visualization.arrayToDataTable(
        [
            ['Mês','Entrada','Saída'],
            ['Jan',2500,1000],
            ['Fev',2000,500],
            ['Mar',3000,1300],
            ['Abr',1500,1700],
            ['Mai',5000,2250],
            ['Jun',3367,3000],
            ['Jul',3452,1468],
            ['Ago',1833,5250],
            ['Set',3803,5500],
            ['Out',1800,1000],
            ['Nov',3569,1500],
            ['Dez',3000,1740]
        ]
    );
    
    var opcoes = {
        title: 'Entrada e saída da conta',
        width: 800,
        height: 400,
        vAxis:{
            gridlines:{
                color:'transparent',
            },
            format:'currency',
            title:'Valores'
        },
        hAxis:{
            title:'Mês'
        }
    }
    var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
    grafico.draw(tabela, opcoes);




    //GRAFICO DE BARRAS
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addColumn({
        type:'string',
        role:'annotation'
    });
    tabela.addColumn({
        type:'string',
        role:'style'
    });
    tabela.addRows([
        ['Educação',2000, 'R$2.000,00', 'blue'],
        ['Transporte',500, 'R$500,00', 'grey'],
        ['Lazer',230, 'R$230,00', 'grey'],
        ['Saúde', 50, 'R$50,00', 'grey'],
        ['Cartão de crédito',900, 'R$900,00', '#8904B1'],
        ['Alimentação',260, 'R$260,00', 'grey']
    ]);

    tabela.sort([{column: 1, desc: true}]);

    var opcoes = {
        title:'Tipos de Gastos',
        height: 400,
        width: 800,
        vAxis:{
            gridlines:{
                count: 0,
                color:'transparent',
            }
        },
        legend:'none',
        hAxis:{
            gridlines:{
                color:'transparent',
            },
            format:'currency',
            textPosition:'none'
        },
        annotations:{
            alwaysOutside: true
        }
    }

    var grafico = new google.visualization.BarChart(document.getElementById('graficoBarra'));
    grafico.draw(tabela, opcoes);




    //GRAFICO PEGANDO JSON
    var dadosJson = $.ajax({
        url: 'dados.json',
        mimeType: 'application-json',
        dataType: 'json',
        async: false
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson);

    var opcoes = {
        title:'Usuário e Poupanças',
        height: 400,
        width: 800,
        legend:'none',
        hAxis:{
            gridlines:{
                color:'transparent'
            }
        }
    } 

    var grafico = new google.visualization.BarChart(document.getElementById('graficoBarraJson'));
    grafico.draw(tabela, opcoes);

}
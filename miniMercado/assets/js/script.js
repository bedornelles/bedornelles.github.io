$(document).ready(()=> {
    
    $('section').load('pages/home.html')
    $('#menu_home').addClass('active')
    $('.pagination').addClass('hidden')

    function clearclass() {
        $('#menuHome').removeClass('active')
        $('#menuSobre').removeClass('active')
        $('#menuProdutos').removeClass('active')
        $('#menuContato').removeClass('active')
    }

    /*navbar e hidden da paginação para aparecer apenas no html de produtos*/
    $('#menuHome').click(()=>{
        clearclass()
        $('#menuHome').addClass('active')
        $('section').load('pages/home.html')
        $('.pagination').addClass('hidden')
    })

    $('#menuSobre').click(()=>{
        clearclass()
        $('#menuSobre').addClass('active')
        $('section').load('pages/sobre.html')
        $('.pagination').addClass('hidden')
    })

    $('#menuProdutos').click(()=>{
        clearclass()
        $('#menuProdutos').addClass('active')
        $('section').load('pages/produtos.html')
        $('.pagination').removeClass('hidden')
    })

    $('#menuContato').click(()=>{
        clearclass()
        $('#menuContato').addClass('active')
        $('section').load('pages/contato.html')
        $('.pagination').addClass('hidden')
    })

    /*paginação */
    $('#pagina1').click(()=>{
        clearclass()
        $('section').load('pages/produtos.html')
    })

    $('#pagina2').click(()=>{
        clearclass()
        $('section').load('pagesProdutos/produtos2.html')
    })

    $('#pagina3').click(()=>{
        clearclass()
        $('section').load('pagesProdutos/produtos3.html')
    })

    function clearclass() {
        $('#pagePrevious').removeClass('active')
        $('#page1').removeClass('active')
        $('#page2').removeClass('active')
        $('#page3').removeClass('active')
        $('#pageNext').removeClass('active')
    }
})
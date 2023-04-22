var aside = document.querySelector('.x-aside-container');
aside.classList.add('box')
var firstDiv = aside.querySelector('div');
firstDiv.style.display = 'block';
firstDiv.style.alignItems = 'center';
firstDiv.style.justifyContent = 'center';

var firstButton = firstDiv.querySelector('button');
firstButton.style.marginLeft = '30%';
firstButton.style.marginRight = '3%';

var switchInput = document.querySelector('.sc-table .tool .el-switch__input');
switchInput.classList.remove('el-switch__input');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
        var addedNode = mutation.addedNodes[0];
        if (addedNode.classList && addedNode.classList.contains('el-dialog__body')) {
            addedNode.classList.add('window');
            addedNode.classList.add('headless');
        }
        }
    });
    }
);

observer.observe(document.body, {
    childList: true,
    subtree: true
});

var tables = document.querySelectorAll('.x-container .sc-table');
tables.forEach(function(table) {
    table.classList.add('window');
    table.classList.add('headless');
    table.style.maxWidth = '100%';

    table.parentElement.style.padding = '0px';

    var cells = table.querySelectorAll('td');
    cells.forEach(function(cell) {
        cell.style.backgroundColor = '#4C5844';
        cell.style.color = '#3E4637';
    });
});
'use strict';

// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

const lists = [
    {
        id: 'left-list',
        items: [
            'bread',
            'milk',
            'orange',
            'tomato',
        ],
    },
    {
        id: 'tools',
        items: [
            '<button id="up" onclick="moveUp();">Up</button>',
            '<button id="right" onclick="pushItemRight();">></button>',
            '<button id="delete" onclick="deleteItem();">X</button>',
            '<button id="down" onclick="moveDown();">Down</button>',
        ],
    },
    {
        id: 'right-list',
        items: [],
    },
];

generateLayout(lists);
const selectableItems = document.getElementById('left-list').getElementsByTagName('li');

function generateLayout(lists) {
    const section = document.createElement('section');

    lists
        .map(list => createUl(list))
        .forEach(ul => section.appendChild(ul));

    selectItem(section.getElementsByTagName('li')[0]);
    document.body.prepend(section);
}

function createUl(list) {
    const newUl = document.createElement('ul');
    if (list.id) newUl.id = list.id;

    let newLi;
    list.items.forEach(element => {
        newLi = document.createElement('li');
        newLi.innerHTML = element;

        newUl.appendChild(newLi);
    });

    return newUl;
}

function getSelectedIndex() {
    return [...selectableItems]
        .reduce((selectedIndex, currentValue, currentIndex) => {
            return isSelected(currentValue) ? currentIndex : selectedIndex;
        }, -1);
}

function moveUp() {
    selectNext(-1);
}

function moveDown() {
    selectNext(1);
    
}

function deleteItem() {
    const selectedIndex = getSelectedIndex();
    if (selectableItems.length < 1 ||  selectedIndex < 0) return;

    selectableItems[selectedIndex].remove();
    if (selectableItems.length) selectItem(selectableItems[0]);
}

function pushItemRight() {
    const selectedIndex = getSelectedIndex();
    if (selectableItems.length < 1 ||  selectedIndex < 0) return;

    unselectItem(selectableItems[selectedIndex]);
    document.getElementById('right-list').appendChild(selectableItems[selectedIndex]);
    if (selectableItems.length) selectItem(selectableItems[0]);
}

function selectNext(step) {
    const selectedIndex = getSelectedIndex();
    const itemsCount = selectableItems.length;
    let nextIndex;

    if (!itemsCount) return;
    if (selectedIndex + step == -1) {
        nextIndex = itemsCount - 1;
    } else if (selectedIndex + step == itemsCount) {
        nextIndex = 0;
    } else {
        nextIndex = selectedIndex + step;
    }

    unselectItem(selectableItems[selectedIndex]);
    selectItem(selectableItems[nextIndex]);
}

function selectItem(item) {
    item.style.backgroundColor = '#ccc';
}

function unselectItem(item) {
    item.style.backgroundColor = null;
}

function isSelected(item) {
    return (item.style.backgroundColor ? true : false);
}